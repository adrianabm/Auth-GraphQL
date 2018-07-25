import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm'

import SignupMutation from '../mutations/Signup'
import CurrentUser from '../queries/CurrentUser'

class SignupForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: []
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: CurrentUser }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message)

        this.setState({ errors })
      })
  }

  render() {
    return (
      <div>
        <h4>SignUp</h4>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    )
  }
}

export default graphql(SignupMutation)(SignupForm)
