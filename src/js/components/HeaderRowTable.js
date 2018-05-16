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
import { Link } from "react-router-dom";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const HeaderRowTable = (props) => {
  return (
            <CustomTableCell>holoo (100g serving)</CustomTableCell>
            <CustomTableCell >Calories</CustomTableCell>
            <CustomTableCell >holo</CustomTableCell>
            <CustomTableCell numeric>Fat (g)</CustomTableCell>
            <CustomTableCell numeric>Carbs (g)</CustomTableCell>
            <CustomTableCell numeric>Protein (g)</CustomTableCell>
  );
}

export default HeaderRowTable;