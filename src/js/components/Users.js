import React from "react"
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { AppBar, Toolbar } from "material-ui";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import HouseIcon from '@material-ui/icons/Home';


class Users extends React.Component {

	render() {
		const users = this.props.data
		const userNode = users.map((user) => {
			return (
				<div key={user.id}>
					<Toolbar>
						<Grid container spacing={24}>
							<Grid item xs={1}/>
							<Grid item xs={3}>
								<h2>Javier</h2>
								<h6>Cansado</h6>
								holoo
								holoo
							</Grid>
							<Grid item xs={3}>
								<Paper className='colorPapel'>xs=3</Paper>
							</Grid>
						</Grid>
					</Toolbar>
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
export default Users