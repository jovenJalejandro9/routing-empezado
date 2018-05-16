import React from 'react';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import MenuItem from 'material-ui/Menu/MenuItem';
import { Link } from "react-router-dom";

const FilteUsers = (props) => {
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
  const sponsor = [
    {
      label: 'Menos de un año',
      value: 'oneYear',
    },
    {
      label: 'Entre un año y 4 años',
      value: 'fourYears',
    },
    {
      label: 'Más de cuatro años',
      value: 'moreFourYears',
    },
    
  ];
  const comunication = [
    {
      label: 'No habla',
      value: 'dontSpeak',
    },
    {
      label: 'Habla palabras sueltas',
      value: 'someWords',
    },
    {
      label: 'Formula frases simples',
      value: 'simpleSentences',
    },
    {
      label: 'Se le entiende bien',
      value: 'easyToUnderstand',
    },
    {
      label: 'Habla sin problema',
      value: 'Prefect',
    },
  ];
  const home = ['Estera', 'Adobe', 'Triplay', 'Ladrillo']
  return (
    <div>
      <ExpansionPanel className='containerFilter' >
        <ExpansionPanelSummary className='headerFilter  ' expandIcon={<ExpandMoreIcon />}>
          <div >
            <Typography variant='display1'>Filtros</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className='bodyFilter'>
          <Grid container spacing={24}>
            <Grid item xs={6} >
              <TextField
                fullWidth
                className='eleTextField'
                id="filterNameSheet"
                label="Nombre"
              />

            </Grid>
            <Grid item xs={6} >
              <TextField
                fullWidth
                className='eleTextField'
                id="filterCitySheet"
                label="Localidad"
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                fullWidth
                className='eleTextField'
                id="filterMedicalSheet"
                label="Diagnóstico"
              />
            </Grid>
            <Grid item xs={6} >
              <TextField
                fullWidth
                className='eleTextField'
                id="filterTestsSheet"
                label="Pruebas realizadas"
              />
            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="siwichFhysical" />} label="Terapia física" />
            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="swichLanuage" />} label="Terapia de Lenguaje" />
            </Grid>
            <Grid item xs={6} >
              <TextField
                fullWidth
                className='eleTextField'
                id="filterSchoolSheet"
                label="Escuela"
              />
            </Grid>
            <Grid item xs={6} >
            </Grid>
            <Grid item xs={6} >
              <TextField
                select
                fullWidth
                className='eleTextField'
                id="filterMovilitySheet"
                label="Movilidad"
                value='every'
              >
                {movility.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} >
              <TextField
                select
                fullWidth
                className='eleTextField'
                id="filterComunicationSheet"
                label="Comunicación"
                value='every'
              >
                {comunication.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="siwichChair" />} label="Silla de ruedas" />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={6} >
              <TextField
                select
                fullWidth
                className='eleTextField'
                id="filterHomeSheet"
                label="Vivienda"
                value='every'
              >
                {home.map(value => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="owner" />} label="Propiedad" />
            </Grid>
            <Grid item xs={6} />


            <Grid item xs={6} >
              <TextField
                select
                fullWidth
                className='eleTextField'
                id="filterHomeSheet"
                label="Apadrinamiento"
                value='every'
              >
                {sponsor.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="eatPlace" />} label="Comedor social" />
            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="newSheets" />} label="Nueva ficha" />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancelar</Button>
          <Link to="/sheets" className='linkStyle'>
            <Button className='finalButton' variant="raised" color="secondary" >
              Aplicar
      			</Button>
          </Link>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

export default FilteUsers;