import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import CurrentUser from '../queries/CurrentUser'
import LogoutMutation from '../mutations/Logout'

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: CurrentUser }]
    })
  }

  renderButtons() {
    const { loading, currentUser } = this.props.data

    if (loading) {
      return <div />
    }

    if (currentUser) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      )
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      )
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    )
  }
}

export default graphql(LogoutMutation)(graphql(CurrentUser)(Header))
