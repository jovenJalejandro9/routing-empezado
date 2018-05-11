import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Users from './components/Users'
import Login from './components/Login'
import UserPerfil from './components/UserPerfil'
import SheetEdition from './components/SheetEdition'
import Sheet from './components/Sheet'
import Visits from './components/Visits'
import Sheets from './components/Sheets'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import SheetIcon from '@material-ui/icons/ContentPaste';
import GroupIcon from '@material-ui/icons/Group';
import LoginIcon from '@material-ui/icons/AccountCircle';
import HouseIcon from '@material-ui/icons/Home';
import VisitsIcon from '@material-ui/icons/Visibility';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


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
    prevVolunteering: ['Discapacidad', 'Limpieza']
  },
  {
    id: 2,
    name: 'Pepin',
    surname: 'Tre'
  },
  {
    id: 3,
    name: 'Mariano',
    surname: 'Rajoy'
  }
]
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppBar  className = 'container' position='sticky' color='secondary'>
            <Grid container spacing={24}>
              <Grid item xs={2} />
              <Grid item xs={3} >
                <h3>kori-NG0</h3>
              </Grid>
              <Grid item xs={5} >
                <BottomNavigation
                  className={'menuNabBarContainer'}
                >
                  <Link to="/">
                    <BottomNavigationAction label="Home" icon={<HouseIcon />} className='menuNabBarIcon' />
                  </Link>
                  <Link to="/users">
                    <BottomNavigationAction label="Usuarios" icon={<GroupIcon />} className='menuNabBarIcon' />
                  </Link>
                  <Link to="/sheets">
                    <BottomNavigationAction label="Fichas" icon={<SheetIcon />} className='menuNabBarIcon' />
                  </Link>
                  <Link to="/visits">
                    <BottomNavigationAction label="Login" icon={<VisitsIcon />} className='menuNabBarIcon' />
                  </Link>    
                  <Link to="/login">
                    <BottomNavigationAction label="Login" icon={<LoginIcon />} className='menuNabBarIcon' />
                  </Link>
                </BottomNavigation>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </AppBar>

          <Route exact path="/" component={() => <Home jarl={false} />} />
          <Route exact path="/users" component={() => <Users data={users} />} />
          <Route exact path="/userPerfil" component={() => <UserPerfil data={users} />} />
          <Route exact path="/sheets" component={() => <Sheets data={users} />} />
          <Route exact path="/login" component={() => <Login data={users} />} />
          <Route exact path="/sheetEdition" component={() => <SheetEdition data={users} />} />
          <Route exact path="/visits" component={() => <Visits data={users} />} />
          <Route exact path="/sheet" component={() => <Sheet data={users} />} />
        </div>
      </Router>
    );
  }
}

export default App;
