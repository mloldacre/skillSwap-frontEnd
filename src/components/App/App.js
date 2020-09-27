import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import NotFound from '../NotFound/NotFound'
import Contact from '../Contact/Contact';
import About from '../About/About';
import Profile from '../Profile/Profile';
import ActiveUserView from '../../routes/ActiveUserView'
import Login from '../../routes/Login'
import Registration from '../Registration/Registration'
import SearchSkills from '../../routes/SearchSkills'

import EditUserView from '../../routes/EditUserView'
import '../../Style.css';
import AddSkill from '../AddSkills/AddSkill';


export default class App extends React.Component {
  render() {

    return (
      <main className="App">
        <Route component={Header}/>

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <PublicRoute path='/loginRegister' component={Login} />
          <PublicRoute path='/registration' component={Registration} />
          {/* Private */}
          <Route path='/loggedIn' component={ActiveUserView}/>

          <Route path='/profile' component={Profile}/>
          <Route path='/searchSkills' component={SearchSkills}/>  
          <Route path='/addSkill' component={AddSkill}/>
          <Route path='/editProfile' component={EditUserView}/>
          {/* private */}
          <Route component={NotFound} />
        </Switch>
        <Footer />

      </main>
    );
  }
}

