import React from 'react';
import TableFamily from './TableFamily';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import AddButton from './AddButton'
import FamilyAddRow from './FamilyAddRow'

class App extends React.Component {
	render() {
		return (
			<Grid container spacing={24}>
				<Grid item xs={2} />
				<Grid item xs={8} >
					<Typography className='topElelment' variant='display1'>
						Datos familiares
				 	</Typography>
					<TableFamily />
					<AddButton form={<FamilyAddRow/>}/>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		);
	}
}

export default App;
