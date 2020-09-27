import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import Barter from '../../images/barter.jpeg'
import searchIcon from '../../images/searchIcon.png'
import Placeholder from '../../images/swap.jpg'
import './Landing.css'

export default function Landing() {
  return (
    <div className='background'>
    <div className="Landing">
      <Link to='/loginRegister'>
        <h1>Service For Service</h1>
      </Link>
        <p className='snowWhite'>Offer your talents in return for your neighbor's talents</p>

        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
              <button type="submit" className="searchButton">
              <img src={searchIcon} alt="magnifying glass" width="26" height="26"></img>
              </button>
        </div>
          </div>

          <div className='group'>
          <p>Trending Categories:</p>
          <div className='item2'>
            <p>Home Repair</p>
          </div>
          <div className='item2'>
            <p>French Lessons</p>
          </div>
          <div className='item2'>
            <p>Web Design</p>
          </div>
          <div className='item2'>
            <p>Personal Chef</p>
          </div>
          <div className='item2'>
            <p>Guitar Lessons</p>
          </div>
          
          </div>

          <div className="group">
				<div className="item">	
        <img src={Placeholder} alt="Hands swaping various objects like cds, tools, books"></img>	
          <h3>Item 1</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				</div>
				<div className="item">
        <img src={Placeholder} alt="Hands swaping various objects like cds, tools, books"></img>	
          <h3>Item 2</h3>
					<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
				</div>
        <div className="item">
        <img src={Placeholder} alt="Hands swaping various objects like cds, tools, books"></img>	
          <h3>Item 3</h3>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
				</div>
			
</div>
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

      {/* <div className='LandingSection Landing'>
        <Link to='/demo'>
          Test Skill Swap today!
      </Link>
        <Link to='/demo'><img src={Barter} alt='Logo goes here' /></Link>
      </div> */}

      {/* <div className='LandingSection Landing'>
        <h4>Testimonials</h4>
        <p>
        Skill Swap is a platform to trade skills. Need to learn to change a tire? How about learning to be a better dancer?
      </p>
      </div> */}

    </div>
    </div>
  );
}
