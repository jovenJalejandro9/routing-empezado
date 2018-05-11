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
import { Link } from "react-router-dom";

const FilteUsers = (props) => {
  const { classes } = props;
  return (
    <div>
      <ExpansionPanel className='containerFilter' >
        <ExpansionPanelSummary className='headerFilter  ' expandIcon={<ExpandMoreIcon />}>
          <div >
            <Typography >Filtros</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className='bodyFilter'>
          <Grid container spacing={24}>
            <Grid item xs={6} >
              <TextField
                fullWidth
                className='eleTextField'
                id="filterUserProfession"
                label="Profesión"
              />

            </Grid>
            <Grid item xs={6} >
              <TextField
                fullWidth
                className='eleTextField'
                id="filterUserStudies"
                label="Estudios"
              />

            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="siwichDriver" />} label="Conduce" />
            </Grid>
            <Grid item xs={6} >
              <FormControlLabel control={<Switch value="swichFood" />} label="Manipula alimentos" />
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
          <Link to="/users" className='linkStyle'>
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