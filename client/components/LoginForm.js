import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm'

import LoginMutation from '../mutations/Login'
import CurrentUser from '../queries/CurrentUser'

class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: CurrentUser }]
    })
  }

  render() {
    return (
      <div>
        <h4>Login</h4>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default graphql(LoginMutation)(LoginForm)
