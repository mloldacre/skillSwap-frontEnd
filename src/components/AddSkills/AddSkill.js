import React, { Component } from 'react'
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import '../../Style.css';
import { Link } from 'react-router-dom';
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
        <fieldset className='addSkill'>
          <legend>New Skill</legend>
          <div className="category">

            <label htmlFor="skillOffer">Skill Offer: </label>

            <select id="skillOffer">
              <option value="Arts/Entertainment">Arts/Entertainment</option>
              <option value="Automotive/Mechanical">Automotive/Mechanical</option>
              <option value="Construction/Handyman">Construction/Handyman</option>
              <option value="Education/Tutoring" selected>Education/Tutoring</option>
              <option value="Fitness/Training">Fitness/Training</option>
              <option value="Technology/Computers">Technology/Computers</option>
            </select>

          </div>

          <div className="category">

            <label htmlFor="skillSeeking">Skill Seeking: </label>

            <select id="skillSeeking">
              <option value="Arts/Entertainment">Arts/Entertainment</option>
              <option value="Automotive/Mechanical">Automotive/Mechanical</option>
              <option value="Construction/Handyman">Construction/Handyman</option>
              <option value="Education/Tutoring" selected>Education/Tutoring</option>
              <option value="Fitness/Training">Fitness/Training</option>
              <option value="Technology/Computers">Technology/Computers</option>
            </select>

          </div>
          <div className="skillDesc">
            <label htmlFor="skillDesc">
              Skill desc: <br></br>
            </label>
            <textarea
              required
              name="skillDesc"
              type="text"
              id="skillDesc">
            </textarea>
          </div>
          <button type="submit">Add Skill</button>
          <Button />
        </fieldset>
      </form>
    );
  }
}

export default AddSkill
