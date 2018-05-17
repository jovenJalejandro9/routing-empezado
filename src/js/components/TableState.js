import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'material-ui/Button';
import DeleteButton from './DeleteButton'

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

// const header = ['Actualizado', 'centro', 'comienzo', 'Centros anteriores','Terapias/apoyos','Apoyos', 'entorno', ' ']
// const data = [
//   { timeStamp: '20/10/2018', currentSchool: 'Katuwira', startYear: 2016, previousCenters: 'Angel Mary', therapyes:' T.fisica, T.Lenguaje', support:'Madre', environment:'Sale a jugar al parque con los vecinos'},
//   { timeStamp: '20/10/2014', currentSchool: 'Angel Mary', startYear: 2013, previousCenters: 'Ninguno', therapyes:' T.fisica', support:'Madre', environment:'Sale a jugar al parque con los vecinos'},
// ]

function TableState(props) {
  const header = props.headTabEducation
  const data = props.bodyTabEducation
  const { classes } = props
  const headerTable = header.map((ele) => {
    return (
      <CustomTableCell key={ele}>{ele}</CustomTableCell>
    )
  })
  let cols = []
  const bodyTable = data.map(row => {
    cols = []
    for (let key in row) {
      if (row.hasOwnProperty(key)) {
        cols.push((<CustomTableCell >{row[key]}</CustomTableCell>))
      }
    }
    cols.push((
      <CustomTableCell >
        <DeleteButton/>
      </CustomTableCell>
    ))
    return (
      <TableRow className={classes.row} key={row.id}>
        {cols}
      </TableRow>
    )
  })
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {headerTable}
          </TableRow>
        </TableHead>
        <TableBody className='bodyTable' >
          {bodyTable}
        </TableBody>

      </Table>
    </Paper>
  );
}

TableState.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableState);