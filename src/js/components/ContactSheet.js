import React from 'react';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import MenuItem from 'material-ui/Menu/MenuItem';

class App extends React.Component {
  render() {
    const relation = [
			{
				value: 'mother',
				label: 'Madre',
			},
			{
				value: 'father',
				label: 'Padre',
			},
			{
				value: 'granparent',
				label: 'Abuelo',
			},
			{
				value: 'anotherRelative',
				label: 'otro familar',
			},
			{
				value: 'other',
				label: 'Otro',
			},
    ];
    const user = this.props.user
    return (
      <Grid container spacing={24}>
      <Grid item xs={2} />
      <Grid item xs={8} >
        <Typography className='topElelment' variant='display1' gutterBottom>
          Contacto
				 			</Typography>
        <Grid container spacing={24}>
          <Grid item xs={3} >
            <TextField
              required
              fullWidth
              className='eleTextField'
              id="nameUser"
              label="Nombre"
              defaultValue="Javier"
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              required
              className='eleTextField'
              id="firstSurnameUser"
              label="Primer apellido"
              defaultValue="Cansado"
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="secondSurnameUser"
              label="Segundo apellido"
              defaultValue="Perez"
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="birthdayUser"
              label="Fecha de nacimiento"
              defaultValue="1999-03-23"
              type='date'
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="IdUser"
              label="D.N.I"
              defaultValue="72282930X"
            />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={3} >
            <TextField
              fullWidth
              required
              className='eleTextField'
              id="carerUser"
              label="Responsable"
              defaultValue='Eva Ache'
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              select
              fullWidth
              className='eleTextField'
              id="carerUser"
              label="Parentesco"
              defaultValue='Eva Ache'
              value='Madre'
            >
              {relation.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={3} >
            <TextField
              fullWidth
              required
              className='eleTextField'
              id="tel1CarerUser"
              label="Primer telefono"
              defaultValue={user.tel1}
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="tel2CarerUser"
              label="Segundo telefono"
              defaultValue={user.tel2}
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="IdCarerUser"
              label="D.N.I del responsable"
              defaultValue="72282930X"
            />
          </Grid>
        </Grid>
        <Toolbar className='containeRowUser'>
          <Grid container spacing={24}>
            <Grid item xs={6} >
              <TextField
                required
                fullWidth
                className='eleTextField'
                id="addresUser"
                label="Direccion"
                defaultValue="C/Mirra 39, Tres Cantos, Madrid"
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                fullWidth
                className='eleTextField'
                id="emailUser"
                label="Email"
                defaultValue={user.email}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </Grid>
      <Grid item xs={2} /> 
      </Grid>
    );
  }
}

export default App;
