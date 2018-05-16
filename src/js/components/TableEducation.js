import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

let id = 0;
function createData(currentSchool, startYear, prevSchool, theraphyes, support, enviornment, observations, dateStamp) {
  id += 1;
  return { id,currentSchool, startYear, prevSchool, theraphyes, support, enviornment, observations, dateStamp};
}

const data = [ 
  createData('Katuwira', '2014','Angel Mary', 'Terapia física', 'Madre', 'Sale con los vecinos', 'Pega a los compañeros', '20/07/2018'),
  createData('Angel Mary', '2012','Nunguno', 'Terapia física', 'Madre', 'Sale con los vecinos', 'Pega a los compañeros', '20/07/2012')
];

function TableEducation(props) {
  const { classes } = props
  const firstElement = true
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell >Centro </CustomTableCell>
            <CustomTableCell >Entrada</CustomTableCell>
            <CustomTableCell >Centros anteriores</CustomTableCell>
            <CustomTableCell >Terapias/apoyos </CustomTableCell>
            <CustomTableCell >Apoyos cercanos</CustomTableCell>
            <CustomTableCell >Entorno</CustomTableCell>
            <CustomTableCell >Observaciones</CustomTableCell>
            <CustomTableCell >Act</CustomTableCell>
            <CustomTableCell ></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody className = 'bodyTable' >
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell >{n.currentSchool}</CustomTableCell>
                <CustomTableCell >{n.startYear}</CustomTableCell>
                <CustomTableCell >{n.prevSchool}</CustomTableCell>
                <CustomTableCell >{n.theraphyes}</CustomTableCell>
                <CustomTableCell >{n.support}</CustomTableCell>
                <CustomTableCell >{n.enviornment}</CustomTableCell>
                <CustomTableCell >{n.observations}</CustomTableCell>
                <CustomTableCell >{n.dateStamp}</CustomTableCell>
                <CustomTableCell >
                  <Button className='finalButton' variant="fab" color="secondary" mini >
                    <DeleteIcon />
                  </Button>
                </CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TableEducation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableEducation);