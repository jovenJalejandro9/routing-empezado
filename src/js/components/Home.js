import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { CardMedia } from 'material-ui/Card';
import SheetIcon from '@material-ui/icons/ContentPaste';
import NoSponsorIcon from '@material-ui/icons/MoodBad';
import SponsorIcon from '@material-ui/icons/Mood';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
} from 'material-ui/List';
const Home = (props) => {
	return (
		<div className='container'>
			<Grid container spacing={24}>
				{/* contact */}
				<Grid item xs={2} />
				<Grid item xs={8} >
					<Typography className='topElelment' variant='display1' gutterBottom>
						Home
				 	</Typography>
					<Grid container spacing={24}>
						<Grid className='conatinerMap' item xs={12} >
							<CardMedia
								className={'mapHome'}
								image="https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png"
								title="Contemplative Reptile"
							/>
						</Grid>
					</Grid>
					<Grid container spacing={24}>
						<Grid item xs={4}>
							<ListItem className='leftItem'>
								<ListItemIcon>
									<SheetIcon />
								</ListItemIcon>
								<ListItemText className='leftItem'
									primary="87"
								/>
							</ListItem>
						</Grid >
						<Grid item xs={4}>
							<ListItem className='leftItem'>
								<ListItemIcon>
									<SponsorIcon />
								</ListItemIcon>
								<ListItemText className='leftItem'
									primary="77"
								/>
							</ListItem>
						</Grid >
						<Grid item xs={4}>
							<ListItem className='leftItem'>
								<ListItemIcon>
									<NoSponsorIcon />
								</ListItemIcon>
								<ListItemText className='leftItem'
									primary="10"
								/>
							</ListItem>
						</Grid >
					</Grid>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</div>
	)
}

export default Home