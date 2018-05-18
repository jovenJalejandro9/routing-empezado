import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TableState from './TableState'
import AddButton from './AddButton'
import MedicalForm from './MedicalForm'


class MedialSheet extends React.Component {
  render() {
    const dataStateMedical = [
      { timeStamp: '20/10/2018', diagnose: 'S. Down', movility: 'Buena', comunication: 'Palabras sueltas', tests: 'Tack', treatment:'Ninguno', diseaseRelative:'Nada', observations: 'No ha ido al médico'  },
      { timeStamp: '20/10/2014', diagnose: 'S. Down', movility: 'Buena', comunication: 'No puede hablar', tests: 'Tack', treatment:'Ninguno', diseaseRelative:'Nada', observations: 'No ha ido al médico'  }
    ]
    const headStateMedical = ['Fecha', 'Diagnóstico', 'Movilidad', 'Comunicación','P. Realizadas','Tratamiento', 'Enf. familia', 'Obs',' ']
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2} />
          <Grid item xs={8} >
            <Typography className='topElelment' variant='display1' gutterBottom>
              Situación médica
            </Typography>
            <TableState headTab={headStateMedical} bodyTab = {dataStateMedical}/>
            <AddButton form={<MedicalForm />} />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default MedialSheet;
