import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm'

import SignupMutation from '../mutations/Signup'

class SignupForm extends Component {
  render() {
    return (
      <div>
        <h4>SignUp</h4>
        <AuthForm />
      </div>
    )
  }
}

export default graphql(SignupMutation)(SignupForm)
