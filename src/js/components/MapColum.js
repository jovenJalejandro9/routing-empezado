import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChecksMap from './ChecksMap'

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 16,
    marginTop: theme.spacing.unit * 3,
    marginTop: 80,
    marginRight: 60,
  }),
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={5}>
        <ChecksMap />
      </Paper>
    </div>
  );
}
      
PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
