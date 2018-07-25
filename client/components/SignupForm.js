import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router'

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

  componentWillUpdate(nextProps) {
    if (!this.props.data.currentUser && nextProps.data.currentUser) {
      // user was not signed in, but now is.
      // redirect to dashboard
      hashHistory.push('/dashboard')
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

export default graphql(CurrentUser)(graphql(SignupMutation)(SignupForm))
