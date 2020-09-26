import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

export default class ActiveUserView extends Component {
  render() {
    return (
      <main>
      <h1>Main Menu</h1>      
      <p>Placeholder for list of services near me</p>
      <Link to='/scribesCalendar/'>
        <p>Search functionality?</p>
      </Link>
        <Link to='/scribeReview/'>
          <p>Skill request form</p>
      </Link>
        <Link to='/scribbleEntry/'>
          <p>What I offer form</p>
      </Link>
      </main>
    )
  }

}