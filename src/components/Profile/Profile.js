import React, { Component } from 'react';
import '../../Style.css';
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton'
import TokenService from '../../services/token-service';

export default class Profile extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }
  static contextType = UserContext;

  componentDidMount() {
    this.context.clearError()
    // AuthApiService.getUser()
    //   .then(this.context.setUser)
    //   .catch(this.context.setError)
  }

  state = { error: null }

  handleDelete = (userId) => {
    this.context.clearError()
    AuthApiService.deleteUser(userId)
      .then(() => {
        TokenService.clearAuthToken()
        this.props.history.push('/')
      })
  }

  handleClickCancel = () => {
    this.props.history.push('/loggedIn')
  };

  render() {
    const { error } = this.context
    const { user } = this.context
    return (
      <div className="Profile">
        <h2>My Profile</h2>
        <form
          className='ProfileForm'
        >
          <div role='alert'>
            {error
              ? <p className='red'>{error}</p>
              : null}
          </div>
          <fieldset>
          <legend>Profile</legend>
          <div className='first_name'>
            <label htmlFor='ProfileFormFirstName'>
              First name:
            </label>
            <input
              name='first_name'
              type='text'
              value={user.first_name}
              disabled
              id='ProfileFormFirstName'>
            </input>
          </div>
          <div className='last_name'>
            <label htmlFor='ProfileFormLastName'>
              Last name:
            </label>
            <input
              name='last_name'
              type='text'
              value={user.last_name}
              disabled
              id='ProfileFormLastName'>
            </input>
          </div>
          <div className='email'>
            <label htmlFor='ProfileFormEmail'>
              Email:
          </label>
            <input
              name='email'
              type='text'
              value={user.email}
              disabled
              id='ProfileFormEmail'>
            </input>
          </div>
          <div className='user_name'>
            <label htmlFor='ProfileFormUsername'>
              Username:
          </label>
            <input
              name='user_name'
              type='text'
              value={user.user_name}
              disabled
              id='ProfileFormUsername'>
            </input>
          </div>
          <Link to='/editProfile'>
            <button type='button'
              user={user}>
              Edit
          </button>
          </Link>
          <button type='button' onClick={this.handleClickCancel}>
            Cancel
        </button>
          <button type='button' onClick={() => this.handleDelete(user.id)}>
            Delete
        </button>
          </fieldset>
        </form>
        <BackButton/>
      </div>

    );
  }
}

