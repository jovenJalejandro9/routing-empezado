import React from 'react';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { Link } from "react-router-dom";


const Login = (props) => {
	return (
		<div className='container'>
			<Grid container spacing={24}>
				{/* contact */}
				<Grid item xs={2} />
				<Grid item xs={8} >
					<Typography className='topElelment' variant='display1' gutterBottom>
						Login
				 	</Typography>
						<form className='userForm'>
					<Grid container spacing={24}>
							<Grid item xs={6} >
							<TextField
											fullWidth
											className='eleTextField'
											id="nameUser"
											label="Nick o email"
										/>
						 </Grid>
							<Grid item xs={6} >
							<TextField
											fullWidth
											className='eleTextField'
											id="nameUser"
											type="password"
											label="Contraseña"
										/>
						 </Grid>
					</Grid>
					<Link to="/Users" className = 'linkStyle '>
									<Button className = 'finalButton' variant="raised" color="secondary" >
										Aceptar	
      						</Button>
							</Link>
						</form>
				</Grid>
				<Grid item xs={2} />
			</Grid>
		</div>
	)
}



export default Login