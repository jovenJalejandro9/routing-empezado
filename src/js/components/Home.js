import React from 'react';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Switch from 'material-ui/Switch';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { FormControlLabel } from 'material-ui/Form';
import { Link } from "react-router-dom";
import SheetIcon from '@material-ui/icons/ContentPaste';
import NoSponsorIcon from '@material-ui/icons/MoodBad';
import SponsorIcon from '@material-ui/icons/Mood';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List, {
	ListItem,
	ListItemIcon,
	ListItemText,
} from 'material-ui/List';
import ExpansionPanel, {
	ExpansionPanelSummary,
	ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

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

					<Grid container spacing={24}>
						<Grid className='conatinerMap' item xs={12} >
							<CardMedia
								className={'mapHome'}
								image="https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png"
								title="Contemplative Reptile"
							/>
						</Grid>
					</Grid>
					<Link to="/Users" className='linkStyle '>
						<Button className='finalButton' variant="raised" color="secondary" >
							Aceptar
      						</Button>
					</Link>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</div>
	)
}

export default Home