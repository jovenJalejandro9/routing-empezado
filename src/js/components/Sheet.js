import React from 'react';
import TextField from 'material-ui/TextField';
import Toolbar from 'material-ui/Toolbar';
import TableFamily from './TableFamily';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Switch from 'material-ui/Switch';
import Button from 'material-ui/Button';
import MenuItem from 'material-ui/Menu/MenuItem';
import { FormControlLabel } from 'material-ui/Form';
import { Link } from "react-router-dom";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import AddIcon from '@material-ui/icons/Add';



class Sheet extends React.Component {
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
		// const date = new Date()
		// const formatDate = date.getDate() + '-' + date.getMonth() + '-' +
		const relation = [
			{
				value: 'mother',
				label: 'Madre',
			},
			{
				value: 'father',
				label: 'Padre',
			},
			{
				value: 'granparent',
				label: 'Abuelo',
			},
			{
				value: 'anotherRelative',
				label: 'otro familar',
			},
			{
				value: 'other',
				label: 'Otro',
			},
		];
		const pastYears = [2018, 2017, 2019, 2020]
		return (
			<div className='container'>
				<form className='userForm'>
					<Grid container spacing={24}>
						{/* contact */}
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Contacto
				 			</Typography>
							<Grid container spacing={24}>
								<Grid item xs={3} >
									<TextField
										required
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
										required
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
										id="birthdayUser"
										label="Fecha de nacimiento"
										defaultValue="1999-03-23"
										type='date'
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="IdUser"
										label="D.N.I"
										defaultValue="72282930X"
									/>
								</Grid>
							</Grid>
							<Grid container spacing={24}>
								<Grid item xs={3} >
									<TextField
										fullWidth
										required
										className='eleTextField'
										id="carerUser"
										label="Responsable"
										defaultValue='Eva Ache'
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										select
										fullWidth
										className='eleTextField'
										id="carerUser"
										label="Parentesco"
										defaultValue='Eva Ache'
										value='Madre'
									>
										{relation.map(option => (
											<MenuItem key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</TextField>
								</Grid>

								<Grid item xs={3} >
									<TextField
										fullWidth
										required
										className='eleTextField'
										id="tel1CarerUser"
										label="Primer telefono"
										defaultValue={user.tel1}
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="tel2CarerUser"
										label="Segundo telefono"
										defaultValue={user.tel2}
									/>
								</Grid>
								<Grid item xs={3} >
									<TextField
										fullWidth
										className='eleTextField'
										id="IdCarerUser"
										label="D.N.I del responsable"
										defaultValue="72282930X"
									/>
								</Grid>
							</Grid>
							<Toolbar className='containeRowUser'>
								<Grid container spacing={24}>
									<Grid item xs={6} >
										<TextField
											required
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
						</Grid>
						<Grid item xs={2} />
						{/* Family Information */}
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Datos familiares
				 			</Typography>
							<Grid container spacing={24}>
								<Grid item xs={12} >
									<TableFamily />
								</Grid>
							</Grid>
							<Button align='right' className='finalButton' variant="fab" color="secondary" >
								<AddIcon />
							</Button>
						</Grid>
						<Grid item xs={2} />

						{/* Education formation */}
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Educacion/Formación
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
						{/* Social Situation */}
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Situación social
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
						{/* medical information */}
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Datos medicos
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
						{/* House information */}
						<Grid item xs={2} />
						<Grid item xs={8} >
							<Typography className='topElelment' variant='display1' gutterBottom>
								Datos de la vivienda
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
						{/* economical information */}
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
						</Grid>
						<Grid item xs={2} />
					</Grid>
				</form>
			</div>
		)
	}
}
export default Sheet