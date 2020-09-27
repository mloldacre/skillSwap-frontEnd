import React, { Component } from 'react';
import ServiceApiService from '../services/skill-api-service';
import SkillContext from '../contexts/SkillContext';
import { Section } from '../components/Utils/Utils'
import Service from '../components/Skill/Skill'
import BackButton from '../components/BackButton/BackButton'
import '../Style.css'


export default class ScribeCalendarView extends Component {
  static contextType = SkillContext;

  componentDidMount() {
    this.context.clearError()
    ServiceApiService.getScribesByUser()
      .then(this.context.setScribes)
      .catch(this.context.setError)
  }
  
  renderScribes() {
    const { scribes = [] } = this.context
    return scribes.map(scribe =>
      <Service
        key={scribe.id}
        service={scribe}
      />
    )
  }
  
  render() {
    const { error } = this.context
    return (
      <Section list className='ScribeCalendarView'>
      <h2>List of Services</h2>
        {error
          ? <p className='error'>There was an error, try again</p>
          : this.renderScribes()}
        <BackButton/>
      </Section>
    )
  }
  
}

