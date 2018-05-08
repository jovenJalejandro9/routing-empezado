import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Users from './components/Users'
import Sheets from './components/Sheets'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import SheetIcon from '@material-ui/icons/ContentPaste';
import GroupIcon from '@material-ui/icons/Group';
import HouseIcon from '@material-ui/icons/Home';
import Grid from 'material-ui/Grid';

const users = [
  {
    id: 1,
    name: 'Javier',
    surname: 'Cansado'
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
          <Route exact path="/sheets" component={() => <Sheets data={users} />} />
          
        </div>
      </Router>
    );
  }
}

export default App;
