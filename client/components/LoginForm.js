import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm'

import LoginMutation from '../mutations/Login'
import { graphql } from 'react-apollo'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h4>Login</h4>
        <AuthForm />
      </div>
    )
  }
}

export default graphql(LoginMutation)(LoginForm)
