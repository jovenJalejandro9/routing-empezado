import React from "react"
import FilterUsers from './FilterUsers'
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import VolunteerIcon from '@material-ui/icons/Public';
import CarIcon from '@material-ui/icons/DirectionsCar';
import FoodIcon from '@material-ui/icons/Restaurant';
import EnglishIcon from '@material-ui/icons/RecordVoiceOver';
import SpeakIcon from '@material-ui/icons/PersonAdd';
import { Link } from "react-router-dom";
import List, {
	ListItem,
	ListItemIcon,
	ListItemText,
} from 'material-ui/List';

class Users extends React.Component {
	render() {
		const users = this.props.data
		const userNode = users.map((user) => {
			return (
				<div key={user.id} className='container'>
					<Grid container spacing={24}>

						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Javier Cansado
       					</Typography>

						</Grid>
						<Grid item xs={2} />
					</Grid>

					<Grid container spacing={24}>
						<Grid item xs={2} />
						<Grid className='boxDetailsList' item xs={4}>
							<List className='listUserDetails'>
								<ListItem className='leftItem'>
									<ListItemIcon>
										<PhoneIcon />
									</ListItemIcon>
									<ListItemText className='leftItem'
										primary="7117228392"
										secondary='91892332211'
									/>
								</ListItem>
								<ListItem className='leftItem'>
									<ListItemIcon>
										<PlaceIcon />
									</ListItemIcon>
									<ListItemText className='leftItem'
										primary="C/Mirra 39, Tres Cantos, Madrid"
									/>
								</ListItem>
								<ListItem className='leftItem'>
									<ListItemIcon>
										<EmailIcon />
									</ListItemIcon>
									<ListItemText className='leftItem'
										primary="javi_cansado@gmail.com"
									/>
								</ListItem>
							</List>
						</Grid>
						<Grid className='boxDetailsList' item xs={4}>
							<List className='listUserDetails'>
								<ListItem className='leftItem'>
									<ListItemIcon>
										<WorkIcon />
									</ListItemIcon>
									<ListItemText className='leftItem'
										primary="Profesor"
										secondary='Comico, Socorrista'
									/>
								</ListItem>
								<ListItem className='leftItem'>
									<ListItemIcon>
										<VolunteerIcon />
									</ListItemIcon>
									<ListItemText className='leftItem'
										primary="Discapacidad, Limpieza"
									/>
								</ListItem>
								<p>
									<Tooltip id="tooltip-icon" title="Conduce">
										<CarIcon className='iconInfo' />
									</Tooltip>
									<Tooltip id="tooltip-icon" title="Manipula alimentos">
										<FoodIcon className='iconInfo' />
									</Tooltip>
									<Tooltip id="tooltip-icon" title="Habla Inglés">
										<EnglishIcon className='iconInfo' />
									</Tooltip>
									<Tooltip id="tooltip-icon" title="Habla en público">
										<SpeakIcon className='iconInfo' />
									</Tooltip>
								</p>
							</List>
						</Grid>
						<Grid item xs={2} />
					</Grid>
					<Grid container spacing={24}>
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Link to="/UserPerfil" className='linkStyle'>
								<Button className='finalButton' variant="raised" color="secondary" >
									Toda la información
      						</Button>
							</Link>
						</Grid>
						<Grid item xs={2} />
					</Grid>
					<hr />
				</div>

				// <div key= {user.id}>
				// 	<h2>{user.name} </h2>
				// 	<h3>{user.surname} </h3>
				// 	<hr />
				// </div>
			)
		})
		return <div>
			<AppBar className='container' position='sticky' color='inherit'>
				<Grid container spacing={24}>
					<Grid item xs={2} />
					<Grid item xs={8} >
						<FilterUsers />
					</Grid>
					<Grid item xs={2} />
				</Grid>
			</AppBar>

			{userNode}
		</div>
	}
}
export default Users