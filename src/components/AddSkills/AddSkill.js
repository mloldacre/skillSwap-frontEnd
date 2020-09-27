import React, { Component } from 'react'
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import '../../Style.css';
import {Link} from 'react-router-dom';
import Button from '../BackButton/BackButton'

export class AddSkill extends Component {
  state = { error: null }
  render() {
    const { error } = this.state
    return (
      <form className="LoginSignup"
      onSubmit={this.handleSubmitJwtAuth}
      >
        <div role='alert'>
          {error && <p className="error">{error}</p>}
        </div>
        <h1>New Skill!</h1>
        <fieldset>
          <legend>New Skill</legend>
          <div className="category">
            <label htmlFor="category">
              category:
        </label>
            <input
              required
              name="category"
              id="category">
            </input>
          </div>
          <div className="skillDesc">
            <label htmlFor="skillDesc">
            skill desc: <br></br> 
        </label>
            <input
              required
              name="skillDesc"
              type="skillDesc"
              id="skillDesc">
            </input>
          </div>
          <button type="submit">Add Skill</button> 
          <Button/>
        </fieldset>
      </form>
    );
  }
}

export default AddSkill
