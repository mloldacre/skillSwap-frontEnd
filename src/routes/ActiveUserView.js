import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';
import './ActiveUserView.css'
import Placeholder from '../images/swap.jpg'
export default class ActiveUserView extends Component {
  render() {
    return (
      <main>
      <h1>Welcome back, Swapper</h1>      
        <Link to='/addSkill/'>
          <p>Skill request form</p>
      </Link>


      <section>
			<h2>New Skill Swaps near you</h2>
  
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
    </section>

    <section>
			<h2>Trending Near You</h2>
  
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
    </section>

    
      </main>
    )
  }

}