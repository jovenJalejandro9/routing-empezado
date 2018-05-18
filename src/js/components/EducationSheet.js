import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TableState from './TableState'
import AddButton from './AddButton'
import EducationForm from './EducationForm'


class EducationSheet extends React.Component {
  render() {
    const dataStateEducation = [
      { timeStamp: '20/10/2018', currentSchool: 'Katuwira', startYear: 2016, previousCenters: 'Angel Mary', therapyes:' T.fisica, T.Lenguaje', support:'Madre', asistence:'Buena', obs:'No puede llevarle al médico'},
      { timeStamp: '20/10/2014', currentSchool: 'Angel Mary', startYear: 2013, previousCenters: 'Ninguno', therapyes:' T.fisica', support:'Madre', asistence:'Buena', obs:'No puede llevarle al médico'},
    ]
    const headStateEducation = ['Fecha', 'Centro', 'Comienzo', 'Centros anteriores','Terapias/apoyos','Apoyos', 'Asistencia', 'Obs', ' ']
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2} />
          <Grid item xs={8} >
            <Typography className='topElelment' variant='display1' gutterBottom>
              Educación/Formación
				 	  </Typography>
            <TableState headTab={headStateEducation} bodyTab = {dataStateEducation}/>
            <AddButton form={<EducationForm />} />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default EducationSheet;
