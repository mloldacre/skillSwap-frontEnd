import TokenService from './token-service'
import config from '../config'

const SkillApiService = {
getSkills(){
    return fetch(`${config.API_ENDPOINT}/skills`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
},
getCurrentSkill(){},


  postSkill(userId, skill) {
    return fetch(`${config.API_ENDPOINT}/skills`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        skill_offered: skill.skill_offered,
        skill_seeking: skill.skill_seeking,
        skill_desc: skill.skill_desc,
        user_id: userId
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  deleteSkill(skillId) {
    return fetch(`${config.API_ENDPOINT}/skills/${skillId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
          (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : Promise.resolve('')
      })
  },
  
  updateScribble(scribbleId, text) {
    return fetch(`${config.API_ENDPOINT}/skills/${scribbleId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        scribble_content: text
      }),
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : Promise.resolve('')
      })
  }

}

export default SkillApiService