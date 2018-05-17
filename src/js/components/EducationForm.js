import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import MenuItem from 'material-ui/Menu/MenuItem';

class EducationForm extends React.Component {
  render() {
    const pastYears = [2018, 2017, 2019, 2020]
    return (
      <Grid container spacing={24}>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="currentCenterUser"
            label="Centro Actual"
            defaultValue="AFAPED"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            select
            fullWidth
            className='eleTextField'
            id="schoolYearUser"
            label="Año de entrada"
            defaultValue='2018'
            value='Madre'
          >
            {pastYears.map(year => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="previousCenterUser"
            label="Centros anteriores"
            defaultValue="Angel Mary"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="Therapies"
            label="Apoyos especiales/terapias"
            defaultValue="Terapia fisica, terapia de lenguaje"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="helpUser"
            label="Apoyos cercanos"
            defaultValue="Tios"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            multiline
            fullWidth
            className='eleTextField'
            id="enviornmentUser"
            label="Relaciones con el entorno"
            defaultValue="Sale a la calle"
          />
        </Grid>
      </Grid>
    )
  }
}
export default EducationForm