import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import MenuItem from 'material-ui/Menu/MenuItem';

class MedicalForm extends React.Component {
  render() {
    const movility = [
      {
        label: 'Perfecta',
        value: 'perfect',
      },
      {
        label: 'Puede hacer pequeñas tareas',
        value: 'someTasks',
      },
      {
        label: 'Se puede despzar de un sitio a otro',
        value: 'displacement',
      },
      {
        label: 'No puede moverese',
        value: 'cantMove',
      },
    ];
    const comunication = [
      {
        label: 'Perfecta',
        value: 'perfect',
      },
      {
        label: 'Se le entiende bien',
        value: 'easyToUndestand',
      },
      {
        label: 'Formula frases simples',
        value: 'simpleSentences',
      },
      {
        label: 'Palabras sueltas',
        value: 'singleWords',
      },
      {
        label: 'No habla',
        value: 'nothing',
      },
    ];
    return (
      <Grid container spacing={24}>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="diagnoseUser"
            label="Diagnóstico"
            defaultValue="S.Down"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            select
            fullWidth
            className='eleTextField'
            id="movilityUser"
            label="Movilidad"
            defaultValue='Perfecta'
            value='prefect'
          >
            {movility.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3} >
          <TextField
            select
            fullWidth
            className='eleTextField'
            id="comunicationUser"
            label="Comunicación"
            defaultValue='Perfecta'
            value='prefect'
          >
            {comunication.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="testsUser"
            label="Pruebas realizadas"
            defaultValue="Tack"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="treatment"
            label="Tratamiento"
            defaultValue="Ninguno"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="diseaseFamily"
            label="Enf. de la familiad"
            defaultValue="Nada"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            multiline
            fullWidth
            className='eleTextField'
            id="ObseMedical"
            label="Observaciones"
            defaultValue="No ha ido al médico"
          />
        </Grid>

        <Grid item xs={2} />
      </Grid>
    )
  }
}
export default MedicalForm