import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

class EducationForm extends React.Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="FreeTimeUser"
              label="Tiempo Libre"
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="carer"
              label="Cuidadores"
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="close=Support"
              label="Apoyos cercanos"
              defaultValue=''
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="enviornment"
              label="Rel. con el entorno"
            />
          </Grid>
          <Grid item xs={3} >
            <TextField
              multiline
              fullWidth
              className='eleTextField'
              id="freeTimeObservations"
              label="Observaciones"
            />
          </Grid>
        </Grid>
    )
  }
}
export default EducationForm