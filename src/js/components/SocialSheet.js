import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TableState from './TableState'
import AddButton from './AddButton'
import SocialForm from './SocialForm'


class SocialSheet extends React.Component {
  render() {
    const dataStateEducation = [
    { timeStamp: '20/10/2018', cares: 'Madre', closeSuppoort: 'Tios', enviornment: 'Sale a la calle a jugar con sus amigos'},
     
    ]
    const headStateEducation = ['Tiempo Libre', 'Cuidadores', 'Apoyos cercanos', 'Relaciones con el entorno',' ']
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2} />
          <Grid item xs={8} >
            <Typography className='topElelment' variant='display1' gutterBottom>
              Situación social
				 	  </Typography>
            <TableState headTabEducation={headStateEducation} bodyTabEducation = {dataStateEducation}/>
            <AddButton form={<SocialForm />} />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default SocialSheet;
