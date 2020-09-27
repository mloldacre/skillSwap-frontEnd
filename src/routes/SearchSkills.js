import React, { Component } from 'react';
import SkillApiService from '../services/skill-api-service';
import SkillContext from '../contexts/SkillContext';
import { Section } from '../components/Utils/Utils'
import BackButton from '../components/BackButton/BackButton'
import '../Style.css'
import searchIcon from '../images/searchIcon.png'
import Placeholder from '../images/swap.jpg'




export default class ScribeCalendarView extends Component {
  static contextType = SkillContext;

  componentDidMount() {
    this.context.clearError()
    // ScribeApiService.getScribesByUser()
    //   .then(this.context.setScribes)
    //   .catch(this.context.setError)
  }

  renderScribes() {
    const { scribes = [] } = this.context
    // return scribes.map(scribe =>
    //   <Calendar
    //     key={scribe.id}
    //     scribe={scribe}
    //   />
    // )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='ScribeCalendarView'>
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
              <button type="submit" className="searchButton">
              <img src={searchIcon} alt="" width="26" height="26"></img>
              </button>
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
          {/* <h2>Previous Scribes</h2>
        {error
          ? <p className='error'>There was an error, try again</p>
          : this.renderScribes()} */}
          {/* <BackButton /> */}
      </Section>
    )
  }

}

