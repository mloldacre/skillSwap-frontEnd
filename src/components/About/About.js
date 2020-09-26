import React from 'react';
import BackButton from '../BackButton/BackButton';
import '../../Style.css';

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <h3>Why sign up?</h3>
      <p>Ask not what you can do for others but what you can do for them.</p>
      <h3>Make community</h3>
      <BackButton/>
    </div>
  );
}

