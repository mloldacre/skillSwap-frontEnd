import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import Logo from '../../images/barter.jpeg';

export default function Landing() {
  return (
    <div className="Landing">
      <Link to='/loginRegister'>
        <h1>Subscribe to Barter!</h1>
      </Link>
      <h4>Barter is a platform to trade skills. Need to learn to change a tire? How about learning to be a better dancer? 
      </h4>
      <Link to='/demo'>
        Test Barter today!
      </Link>
      <Link to='/demo'><img src={Logo} alt='Logo goes here' /></Link>
    </div>
  );
}
