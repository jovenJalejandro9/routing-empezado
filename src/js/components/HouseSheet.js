import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TableState from './TableState'
import AddButton from './AddButton'
import HouseForm from './HouseForm'


class HouseSheet extends React.Component {
  render() {
    const dataStateMedical = [
      { timeStamp: '20/10/2018', rentOwn: 'Propiedad', material: 'Ladrillo, Adobe', endowments: 'Agua, Luz, baño', bedRooms: '2', beds:'4', forniture:'Muy antiguo', salubrity:'Humedades por toda la casa', observations: 'Conviven con animales(cerdos y gallinas)'  }
    ]
    const headStateMedical = ['Fecha', 'Porp/Alquiler', 'Material', 'Dotaciones','Estancias','Camas', 'Mobiliario', 'Salubridad', 'Obs',' ']
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2} />
          <Grid item xs={8} >
            <Typography className='topElelment' variant='display1' gutterBottom>
              Situación de la vivienda
            </Typography>
            <TableState headTab={headStateMedical} bodyTab = {dataStateMedical}/>
            <AddButton form={<HouseForm />} />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default HouseSheet;
