import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style.css';
import Barter from '../../images/barter.jpeg'
import searchIcon from '../../images/searchIcon.png'
import Placeholder from '../../images/swap.jpg'
import Repair from '../../images/homeRepair.png'
import Tattoos from '../../images/tattoos.png'
import Meals from '../../images/homeCook.png'
import Paint from '../../images/paint.png'
import Pottery from '../../images/pottery.png'
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
            <input type="text" className="searchTerm" placeholder="What are you looking for?" />
            <button type="submit" className="searchButton">
              <img src={searchIcon} alt="magnifying glass" width="26" height="26"></img>
            </button>
          </div>
        </div>

        <div className='group'>
          <p className='snowWhite'>Trending Categories:</p>
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
        {/* Need to update alts */}
          <img src={Repair} alt="Hands swaping various objects like cds, tools, books"></img>
          <img src={Tattoos} alt="Hands swaping various objects like cds, tools, books"></img>
          <img src={Meals} alt="Hands swaping various objects like cds, tools, books"></img>
          <img src={Paint} alt="Hands swaping various objects like cds, tools, books"></img>       

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
