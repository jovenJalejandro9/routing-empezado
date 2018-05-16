import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import NoSponsorIcon from '@material-ui/icons/MoodBad';

const Home = (props) => {
	return (
		<div className='container'>
			<Grid container spacing={24}>
				{/* contact */}
				<Grid item xs={2} />
				<Grid item xs={8} >
          <NoSponsorIcon style={{ fontSize: 170, color: 'grey' }}/>
					<Typography className='topElelment' variant='display3' gutterBottom>
						No se encontraron resultados
				 	</Typography>
					<Grid container spacing={24}>
						<Grid item xs={4}>
						</Grid >
					</Grid>

				</Grid>
				<Grid item xs={2} />
			</Grid>
		</div>
	)
}

export default Home