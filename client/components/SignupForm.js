import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm'

import SignupMutation from '../mutations/Signup'

class SignupForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    })
  }

  render() {
    return (
      <div>
        <h4>SignUp</h4>
        <AuthForm onSubmit={this.onSubmit.bind(this)} errors={[]} />
      </div>
    )
  }
}

export default graphql(SignupMutation)(SignupForm)
