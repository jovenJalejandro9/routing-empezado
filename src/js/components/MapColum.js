import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ChecksMap from './ChecksMap'
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 16,
    marginTop: 80,
    marginRight: 60,
  }),
});

function CheckMapContainer(props) {
  const { classes } = props;
  return (
    <Grid container spacing={24}>
      <Grid item xs={2} />
      <Grid item xs={8} />
      <Grid item xs={2}>
      <Paper className={classes.root} elevation={5}>
        <ChecksMap />
      </Paper>      
      </Grid>
    </Grid>
  );
}

CheckMapContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckMapContainer);
