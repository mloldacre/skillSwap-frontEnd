import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import TokenService from '../../services/token-service';
import './Header.css'
import Logo from '../../images/rsz_logo.jpg'
import AddSkill from '../../images/addSkill.png';
import Chat from '../../images/chat.png';
import Profile from '../../images/user.png';
import Search from '../../images/loupe.png';

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderActiveUser() {
    return (
      <div className='Headerlogged-in'>
        <span>
          <Link to='/searchSkills/'>
            <img src={Search} alt="search skills" width="40" height="40"></img>
          </Link>
        </span>

        <span>
          <Link to='/addSkill/'>
            <img src={AddSkill} alt="add skill" width="40" height="40"></img>
          </Link>
        </span>

        <span><img src={Chat} alt="" width="40" height="40"></img></span>

        <span>
          <Link to='/profile/'>
            <img src={Profile} alt="user profile" width="40" height="40"></img>
          </Link>
        </span>

        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          <span>Logout</span>
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
          ? <Link to='/loggedIn'>
            <img src={Logo} alt='Logo goes here' className='Logo' />
          </Link>
          : <Link to='/'>
            <img src={Logo} alt='Logo goes here' className='Logo' />
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
