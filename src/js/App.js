import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Users from './components/Users'
import UserPerfil from './components/UserPerfil'
import Sheets from './components/Sheets'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import SheetIcon from '@material-ui/icons/ContentPaste';
import GroupIcon from '@material-ui/icons/Group';
import HouseIcon from '@material-ui/icons/Home';
import Grid from 'material-ui/Grid';

const users = [
  {
    id: 1,
    name: 'Javier',
    surname: 'Cansado',
    tel1: 711727384,
    tel2: 919234322, 
    addres: 'C/Mirra 39, Tres Cantos, Madrid', 
    email: 'javi_cansado@gmail.com',
    currentWork: 'Profesor', 
    prevWorks: ['Humorista', 'Carpintero'], 
    prevVolunteering : ['Discapacidad', 'Limpieza']
  },
  {
    id: 2,
    name: 'Pepin',
    surname: 'Tre'
  }
]
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar position='sticky' color='secondary'>
            <Toolbar>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <h2>koriNGO</h2>
                </Grid>
                <Grid item xs={12} sm={6}>
                <BottomNavigation
                className={'menuNabBar'}
              >
              <Link to="/">
                <BottomNavigationAction label="Home" icon={<HouseIcon />} className='whiteColor' />
              </Link>
              <Link to="/users">
                <BottomNavigationAction label="Usuarios" icon={<GroupIcon />} className='whiteColor' />
              </Link> 
              <Link to="/sheets">
                <BottomNavigationAction label="Fichas" icon={<SheetIcon />} className='whiteColor' />
              </Link> 
              </BottomNavigation>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          
          <Route exact path="/" component={() => <Home jarl={false} />} />
          <Route exact path="/users" component={() => <Users data={users} />} />
          <Route exact path="/userPerfil" component={() => <UserPerfil data={users} />} />
          <Route exact path="/sheets" component={() => <Sheets data={users} />} />
          
        </div>
      </Router>
    );
  }
}

export default App;
