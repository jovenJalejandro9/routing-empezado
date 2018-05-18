import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

class SwitchesGroup extends React.Component {
  state = {
    sponsored: true,
    noSponsored: false,
    nextVisits: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.sponsored}
                onChange={this.handleChange('sponsored')}
                value="sponsored"
              />
            }
            label="Apadrinados(77)"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.noSponsored}
                onChange={this.handleChange('noSponsored')}
                value="noSponsored"
              />
            }
            label="Lista de espera (10)"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.nextVisits}
                onChange={this.handleChange('nextVisits')}
                value="nextVisits"
              />
            }
            label="Próximas visitas"
          />
        </FormGroup>
        <FormHelperText>Filtra con cariño</FormHelperText>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
