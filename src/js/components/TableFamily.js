import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
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
function createData(name, surname, birthday, relation, workStudy, coexistence, observations) {
  id += 1;
  return { id,name, surname, birthday, relation, workStudy, coexistence, observations};
}

const data = [ 
  createData('Jesus', 'Concha','21/2/1990', 'Padre', 'Trabaja', 'Si', 'Bebe mucho'),
  createData('Maria', 'Concha','21/3/2004', 'Hermana', 'Estudia', 'Si', 'No ayuda en casa para nada y está embarazada')
];

function TableFamily(props) {
  const { classes } = props
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Nombre</CustomTableCell>
            <CustomTableCell >Apellido</CustomTableCell>
            <CustomTableCell >Nacimiento</CustomTableCell>
            <CustomTableCell >Parentesco</CustomTableCell>
            <CustomTableCell >Estudia</CustomTableCell>
            <CustomTableCell >Convivencia</CustomTableCell>
            <CustomTableCell >Observaciones</CustomTableCell>
            <CustomTableCell ></CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell >{n.name}</CustomTableCell>
                <CustomTableCell >{n.surname}</CustomTableCell>
                <CustomTableCell >{n.birthday}</CustomTableCell>
                <CustomTableCell >{n.relation}</CustomTableCell>
                <CustomTableCell >{n.workStudy}</CustomTableCell>
                <CustomTableCell >{n.coexistence}</CustomTableCell>
                <CustomTableCell >{n.observations}</CustomTableCell>
                <CustomTableCell >
                  <Button className='finalButton' variant="fab" color="secondary" mini>
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

TableFamily.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableFamily);