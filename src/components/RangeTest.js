import React, { Component } from 'react';
import SkillApiService from '../services/skill-api-service';
import SkillContext from '../contexts/SkillContext';
import { Section } from '../components/Utils/Utils'
import BackButton from '../components/BackButton/BackButton'
import '../Style.css'

export default class CurrentScribeEntry extends Component {


  static contextType = SkillContext


  componentDidMount() {
    this.context.clearError()
    SkillApiService.getSkillCloseBy()
      .then(this.context.setSkills)
      .catch(this.context.setError)

  }


  render() {
    const { skills = [] } = this.context
    return (skills.map(skill =>
      <section>
        <p>{skill.id}</p>
        <p>{skill.skill_zip}</p>
        <p>{skill.skill_offered}</p>
        <p>{skill.skill_seeking}</p>
        <p>{skill.skill_desc}</p>
      
      
      </section>
    )
    )
  }
}