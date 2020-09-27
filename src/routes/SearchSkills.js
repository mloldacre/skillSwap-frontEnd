import React, { Component } from 'react';
import SkillApiService from '../services/skill-api-service';
import SkillContext from '../contexts/SkillContext';
import { Section } from '../components/Utils/Utils'
import BackButton from '../components/BackButton/BackButton'
import '../Style.css'


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
                <i className="fa fa-search"></i>
              </button>
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

