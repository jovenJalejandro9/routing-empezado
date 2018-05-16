import React from 'react';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import TableFamily from './TableFamily';
import AddRelativeDialog from './AddRelativeDialog';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuItem from 'material-ui/Menu/MenuItem';
import { Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import ContactSheet from './ContactSheet'


class App extends React.Component {
	render() {
		return (
			<Grid container spacing={24}>
				<Grid item xs={2} />
				<Grid item xs={8} >
					<Typography className='topElelment' variant='display1' gutterBottom>
						Datos familiares
				 	</Typography>
					<Grid container spacing={24}>
						<Grid item xs={12} >
							<TableFamily />
						</Grid>
					</Grid>
					<Button className='finalButton' variant="fab" color="secondary" >
						<AddIcon />
					</Button>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		);
	}
}

export default App;
