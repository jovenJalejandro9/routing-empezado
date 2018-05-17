import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import MenuItem from 'material-ui/Menu/MenuItem';

class Sheet extends React.Component {
  render() {
    const yesNo = [
			{
				value: 'no',
				label: 'No',
			},
			{
				value: 'yes',
				label: 'Si',
			}
    ];
    const studyWork = [
			{
				value: 'study',
				label: 'Estudia',
			},
			{
				value: 'work',
				label: 'Trabaja',
			}
    ];
    return (
      <Grid container spacing={24}>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="nameRelative"
            label="Nombre"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="surnameRelative"
            label="Apellido"
          />
        </Grid>
        <Grid item xs={3} >
            <TextField
              fullWidth
              className='eleTextField'
              id="birthdayRelative"
              label="Fecha de nacimiento"
              defaultValue="1999-03-23"
              type='date'
            />
          </Grid>
        <Grid item xs={3} >
          <TextField
            fullWidth
            className='eleTextField'
            id="relationRelative"
            label="Parentesco"
          />
        </Grid>
        <Grid item xs={3} >
          <TextField
            select
            fullWidth
            className='eleTextField'
            id="workStudy"
            label="Estudia/Trabaja"
            value='Trabaja'
          >
            {studyWork.map(ele => (
              <MenuItem key={ele.value} value={ele.label}>
                {ele.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={3} >
          <TextField
            select
            fullWidth
            className='eleTextField'
            id="coexistance"
            label="Convivencia"
            defaultValue='Si'
            value='Si'
          >
            {yesNo.map(ele => (
              <MenuItem key={ele.value} value={ele.label}>
                {ele.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} >
          <TextField
            fullWidth
            className='eleTextField'
            id="obsRelative"
            label="Observaciones"
          />
        </Grid>
      </Grid>
    )
  }
}
export default Sheet