import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import TokenService from '../../services/token-service';
import './Header.css'
import Logo from '../../images/rsz_logo.jpg'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderActiveUser() {
    return (
      <div className='Headerlogged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          <span>Logout</span>
        </Link>
        <Link to='/profile'>
          <span>Profile</span>
        </Link>
      </div>
    )
  }


  renderDemoUser() {

    return (
      <div className='HeaderNotlogged-in'>
        <Link to='/loginRegister'>
          <span>Login/Register</span>
        </Link>
      </div>

    )
  }

  render() {
    return (
      <header className="Header">
        {TokenService.hasAuthToken()
          ?<Link to='/loggedIn'>
            <img src={Logo} alt='Logo goes here'className='Logo' />
          </Link>
          : <Link to='/'>
            <img src={Logo} alt='Logo goes here' className='Logo'/>
          </Link>}
        <nav>
          {TokenService.hasAuthToken()
            ? this.renderActiveUser()
            : this.renderDemoUser()}
        </nav>
      </header>
    );
  }

}
