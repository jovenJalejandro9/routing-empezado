import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import MenuItem from 'material-ui/MenuItem';
import { Link } from "react-router-dom";

const FilteUsers = (props) => {
  const { classes } = props;
  const movility = [
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
                id="filterSchoolSheet"
                label="Escuela"
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
										{movility.map(year => (
											<MenuItem key={year} value={year}>
												{year}
											</MenuItem>
										))}
									</TextField>
								</Grid>
            
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="siwichFhysical" />} label="Terapia física" />
            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="swichLanuage" />} label="Terapia de Lenguaje" />
            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="swichEnglish" />} label="Habla ingles" />
            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="swichPublic" />} label="Habla en público" />            </Grid>
            <Grid item xs={2} />
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