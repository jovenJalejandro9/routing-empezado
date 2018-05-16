import React from "react"
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import PlaceIcon from '@material-ui/icons/Place';
import ImportantIcon from '@material-ui/icons/Error';
import LocalityIcon from '@material-ui/icons/LocationCity';
import ZoomIcon from '@material-ui/icons/ZoomIn';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import NoSponsorIcon from '@material-ui/icons/MoodBad';
import TimeIcon from '@material-ui/icons/AvTimer';
import { Link } from "react-router-dom";
import GroupIcon from '@material-ui/icons/Group';

import List, {
	ListItem,
	ListItemIcon,
	ListItemText,
} from 'material-ui/List';

class Sheets extends React.Component {
	render() {
		const users = this.props.data
		const userNode = users.map((user) => {
			return (
				<div key={user.id} className='container'>
					<Grid container spacing={24}>
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Rowan Sebastian Atkinson
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
										<GroupIcon />
									</ListItemIcon>
									<ListItemText className='leftItem'
										primary="Eva Ache"
									/>
								</ListItem>
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
										primary="Pueblo Joven 24 de Octubre 23"
									/>
								</ListItem>
								<ListItem className='leftItem'>
									<ListItemIcon>
										<LocalityIcon />
									</ListItemIcon>
									<ListItemText className='leftItem'
										primary="Chiclayo"
									/>
								</ListItem>
								<ListItem className='leftItem'>
									<ListItemIcon>
										<TimeIcon />
									</ListItemIcon>
									<ListItemText className='leftItem'
										primary="34 días sin visitar"
									/>
								</ListItem>
							</List>
						</Grid>
						<Grid className='boxDetailsList' item xs={4}>
							<List className='listUserDetails'>

							<Typography className='topElelment' variant='display4' gutterBottom>
								97 %
       					</Typography>

								<p>
									<Tooltip id="tooltip-icon" title="Tiene que operarse de la rodilla urgente">
										<ImportantIcon className='iconInfo' />
									</Tooltip>
									<Tooltip id="tooltip-icon" title="Necesita pañales">
										<ZoomIcon className='iconInfo' />
									</Tooltip>
									<Tooltip id="tooltip-icon" title="Se les ha caido parte de la casa y no tienen para pagarlo">
										<MoneyIcon className='iconInfo' />
									</Tooltip>
									<Tooltip id="tooltip-icon" title="No tiene padrino">
										<NoSponsorIcon className='iconInfo' />
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
									Ficha completa
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
			{userNode}
		</div>
	}
}
export default Sheets