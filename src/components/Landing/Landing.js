import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import Barter from '../../images/barter.jpeg';

export default function Landing() {
  return (
    <div className="Landing">
      <Link to='/loginRegister'>
        <h1>Subscribe to Skill Swap!</h1>
      </Link>
      <h4>Skill Swap is a platform to trade skills. Need to learn to change a tire? How about learning to be a better dancer? 
      </h4>
      <Link to='/demo'>
        Test Skill Swap today!
      </Link>
      <Link to='/demo'><img src={Barter} alt='Logo goes here' /></Link>
    </div>
  );
}
