import React from 'react';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Switch from 'material-ui/Switch';
import Button from 'material-ui/Button';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import { Link } from "react-router-dom";

class UserPerfil extends React.Component {
	render() {
		// const contactFields = ['name', 'surname', 'tel1', 'tel2', 'addres', 'email']
		// const contactSection = []
		const user = this.props.data[0]
		// for(let field of contactFields){
		// 	contactSection.push((
		// 		<TextField fullWidth key = {field}
		// 				className='eleTextField'
		// 				id="nameUser"
		// 				label = {field}
		// 				defaultValue = {user[field]}
		// 			/>
		// 	))
		// }

		return (
			<div className='container'>
				<Grid container spacing={24}>
					{/* contact */}
					<Grid item xs={2} />
					<Grid item xs={8} >
						<Typography className='titleUser' variant='display1' gutterBottom>
							Contacto
				 			</Typography>
						<form className='userForm'>
							<Toolbar className='containeRowUser'>
								<Grid container spacing={24}>
									<Grid item xs={3} >
										<TextField
											fullWidth
											className='eleTextField'
											id="nameUser"
											label="Nombre"
											defaultValue="Javier"
										/>
									</Grid>
									<Grid item xs={3} >
										<TextField
											fullWidth
											className='eleTextField'
											id="firstSurnameUser"
											label="Primer apellido"
											defaultValue="Cansado"
										/>
									</Grid>
									<Grid item xs={3} >
										<TextField
											fullWidth
											className='eleTextField'
											id="secondSurnameUser"
											label="Segundo apellido"
											defaultValue="Perez"
										/>
									</Grid>
									<Grid item xs={3} >
										<TextField
											fullWidth
											className='eleTextField'
											id="tel1User"
											label="Primer telefono"
											defaultValue={user.tel1}
										/>
									</Grid>
								</Grid>
							</Toolbar>
							<Toolbar className='containeRowUser'>
								<Grid container spacing={24}>
									<Grid item xs={3} >
										<TextField
											className='eleTextField'
											id="tel2User"
											label="Segundo teléfono"
											defaultValue={user.tel2}
										/>
									</Grid>
								</Grid>
							</Toolbar>
							<Toolbar className='containeRowUser'>
								<Grid container spacing={24}>
									<Grid item xs={6} >
										<TextField
											fullWidth
											className='eleTextField'
											id="addresUser"
											label="Direccion"
											defaultValue="C/Mirra 39, Tres Cantos, Madrid"
										/>
									</Grid>
									<Grid item xs={6} >
										<TextField
											fullWidth
											className='eleTextField'
											id="emailUser"
											label="Email"
											defaultValue={user.email}
										/>
									</Grid>
								</Grid>
							</Toolbar>
						</form>
					</Grid>
					<Grid item xs={2} />
					{/* Others */}
					<Grid item xs={2} />
					<Grid item xs={8} >
						<Typography className='titleUser' variant='display1' gutterBottom>
							Otros
				 		</Typography>
						<form className='userForm'>
						<Toolbar className='containeRowUser'>
								<Grid container spacing={24}>
									<Grid item xs={4} >
										<TextField
											fullWidth
											className='eleTextField'
											id="curretnWorkUser"
											label="Trabajo actual"
											defaultValue={user.currentWork}
										/>
									</Grid>
									<Grid item xs={4} >
										<TextField
											fullWidth
											className='eleTextField'
											id="previousWorksUser"
											label="Trabajos anteriores"
											defaultValue={user.prevWorks}
										/>
									</Grid>
									<Grid item xs={4} >
										<TextField
											fullWidth
											className='eleTextField'
											id="prevVolunteering"
											label="Voluntariado anterior"
											defaultValue={user.prevVolunteering}
										/>
									</Grid>
								</Grid>
							</Toolbar>
							<Toolbar className='containeRowUser'>
								<Grid container spacing={24}>
									<Grid item xs={4} >
										<FormControlLabel control={<Switch value="checked" />} label="Conduce" />
									</Grid>
									<Grid item xs={4} >
										<FormControlLabel control={<Switch value="checked" />} label="Manipula alimentos" />
									</Grid>
									<Grid item xs={4} >
										<FormControlLabel control={<Switch value="checked" />} label="Habala ingles" />
									</Grid>
								</Grid>
							</Toolbar>
							<Link to="/Users" className = 'linkStyle'>
									<Button variant="raised" color="secondary" >
										Guardar Cambios
      						</Button>
								</Link>
						</form>
					</Grid>
					<Grid item xs={2} />
				</Grid>
			</div>
		)
	}
}
export default UserPerfil