import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import { SkillProvider } from './contexts/SkillContext';
import { UserProvider } from './contexts/UserContext';





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <SkillProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </SkillProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

