import React, { Component } from 'react'

export const nullSkill = {
  user_id: {}
}

const SkillContext = React.createContext({
  skill: nullSkill,
  skills: [],
  task: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setSkill: () => { },
  clearScribe: () => { },
  setTasks: () => { },
  addSkill: () => { },
  deleteSkill: () => { },
  updateSkill: () => { },
  setSkills: () => { },
})

export default SkillContext

export class ScribeProvider extends Component {
  state = {
    skill: nullSkill,
    skills: [],
    task: [],
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

  setTasks = task => {
    this.setState({ task })
  }

  clearScribe = () => {
    this.setSkill(nullSkill)
    this.setTasks([])
  }

  addSkill = scribble => {
    this.setTasks([
      ...this.state.task,
      scribble
    ])
  }

  deleteSkill = scribbleId => {
    this.setTasks(
      this.state.task.filter(scribble => scribble.id !== scribbleId)
    )
  }

  updateSkill = updatedSkill => {
    const newTask = this.state.task.map(task =>
      (task.id === updatedSkill.scribbleId)
      ? updatedSkill : task)
    this.setTasks({task: newTask})
  }

  render() {
    const value = {
      skill: this.state.skill,
      skills: this.state.skills,
      task: this.state.task,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setSkill: this.setSkill,
      setSkills: this.setSkills,
      setTasks: this.setTasks,
      clearScribe: this.clearScribe,
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
