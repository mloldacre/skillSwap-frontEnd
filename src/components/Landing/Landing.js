import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import Barter from '../../images/barter.jpeg'

export default function Landing() {
  return (
    <div className="Landing">
      <Link to='/loginRegister'>
        <h1>Service For Service</h1>
      </Link>
        <p>Offer your talents in return for your neighbor's talents</p>

      <div className='LandingSection Landing'>
        <h4>Bartering made easy</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      </p>
      </div>

      <div className='LandingSection Landing'>
        <h4>Quick start</h4>
        <p>
        Skill Swap is a platform to trade skills. Need to learn to change a tire? How about learning to be a better dancer?
      </p>

      </div>

      <div className='LandingSection Landing'>
        <Link to='/demo'>
          Test Skill Swap today!
      </Link>
        <Link to='/demo'><img src={Barter} alt='Logo goes here' /></Link>
      </div>

      <div className='LandingSection Landing'>
        <h4>Testimonials</h4>
        <p>
        Skill Swap is a platform to trade skills. Need to learn to change a tire? How about learning to be a better dancer?
      </p>
      </div>

    </div>
  );
}
