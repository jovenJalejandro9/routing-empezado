import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuItem from 'material-ui/Menu/MenuItem';
import { Link } from "react-router-dom";
import ContactSheet from './ContactSheet'
import FamilySheet from './FamilySheet'
import EducationSheet from './EducationSheet'
import SocialSheet from './SocialSheet'
import MedicalSheet from './MedicalSheet'
import HouseSheet from './HouseSheet';

class Sheet extends React.Component {
	render() {
		const pastYears = [2018, 2017, 2019, 2020]

		const user = this.props.data[0]


		return (
			<div className='container'>
				<form className='userForm'>
					{/* <Grid container spacing={24}> */}
					{/* contact */}
					<ContactSheet user={user} />
					{/* Family Information */}
					<FamilySheet />
					{/* Education formation */}
					<EducationSheet />
					{/* Social Situation */}
					<SocialSheet/>
					{/* medical information */}
					<MedicalSheet/>
						{/* House information */}
					<HouseSheet />
						
						{/* economical information */}
						<Grid container spacing={24}>
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Datos de económicos
				 		</Typography>
							<Grid container spacing={24}>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="currentCenterUser"
										label="Centro Actual"
										defaultValue="AFAPED"
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										select
										fullWidth
										className='eleTextField'
										id="schoolYearUser"
										label="Año de entrada"
										defaultValue='2018'
										value='Madre'
									>
										{pastYears.map(year => (
											<MenuItem key={year} value={year}>
												{year}
											</MenuItem>
										))}
									</TextField>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="previousCenterUser"
										label="Centros anteriores"
										defaultValue="Angel Mary"
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="Therapies"
										label="Apoyos especiales/terapias"
										defaultValue="Terapia fisica, terapia de lenguaje"
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="helpUser"
										label="Apoyos cercanos"
										defaultValue="Tios"
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										multiline
										fullWidth
										className='eleTextField'
										id="enviornmentUser"
										label="Relaciones con el entorno"
										defaultValue="Sale a la calle"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={2} />
						{/* Observations */}
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Observaciones
				 		</Typography>
							<Grid container spacing={24}>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="currentCenterUser"
										label="Centro Actual"
										defaultValue="AFAPED"
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										select
										fullWidth
										className='eleTextField'
										id="schoolYearUser"
										label="Año de entrada"
										defaultValue='2018'
										value='Madre'
									>
										{pastYears.map(year => (
											<MenuItem key={year} value={year}>
												{year}
											</MenuItem>
										))}
									</TextField>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="previousCenterUser"
										label="Centros anteriores"
										defaultValue="Angel Mary"
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="Therapies"
										label="Apoyos especiales/terapias"
										defaultValue="Terapia fisica, terapia de lenguaje"
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="helpUser"
										label="Apoyos cercanos"
										defaultValue="Tios"
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										multiline
										fullWidth
										className='eleTextField'
										id="enviornmentUser"
										label="Relaciones con el entorno"
										defaultValue="Sale a la calle"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={2} />
						{/* End */}
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Link to="/Users" className='linkStyle '>
								<Button className='finalButton' variant="raised" color="secondary" >
									Guardar Cambios
      						</Button>
							</Link>
							<Link to="/Users" className='linkStyle '>
								<Button className='finalButton' variant="raised" color="secondary" >
									Eliminar Ficha
      						</Button>
							</Link>
						</Grid>
						<Grid item xs={2} />
					</Grid>
				</form>
			</div>
		)
	}
}
export default Sheet