import React, { Component } from 'react'

export const nullSkill = {
  user_id: {},
  skill_offered: {},
  skill_seeking: {},
  skill_desc: {}
}

const SkillContext = React.createContext({
  skill: nullSkill,
  skills: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setSkill: () => { },
  clearSkill: () => { },
  setTasks: () => { },
  addSkill: () => { },
  deleteSkill: () => { },
  updateSkill: () => { },
  setSkills: () => { },
})

export default SkillContext

export class SkillProvider extends Component {
  state = {
    skill: nullSkill,
    skills: [],
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setSkill = skill => {
    this.setState({ skill })
  }

  setSkills = skills => {
    this.setState({ skills })
  }


  clearSkill = () => {
    this.setSkill(nullSkill)
  }

  addSkill = skill => {
    this.setSkills([
      ...this.state.skills,
      skill
    ])
  }

  deleteSkill = skillId => {
    this.setSkills(
      this.state.skills.filter(skill => skill.id !== skillId)
    )
  }

  updateSkill = updatedSkill => {
    const newSkills = this.state.skills.map(skill =>
      (skill.id === updatedSkill.skillId)
        ? updatedSkill : skill)
    this.setSkills({ skills: newSkills })
  }

  render() {
    const value = {
      skill: this.state.skill,
      skills: this.state.skills,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSkill: this.setSkill,
      setSkills: this.setSkills,
      clearSkill: this.clearSkill,
      addSkill: this.addSkill,
      deleteSkill: this.deleteSkill,
      updateSkill: this.updateScribble
    }
    return (
      <SkillContext.Provider value={value}>
        {this.props.children}
      </SkillContext.Provider>
    )
  }
}