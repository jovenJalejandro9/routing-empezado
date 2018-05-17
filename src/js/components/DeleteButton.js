import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import DeleteIcon from '@material-ui/icons/Delete';

class DeleteButton extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const form = this.props.form
    
    return (
      <div>
        <Button className='finalButton' variant="fab" color="secondary" onClick={this.handleClickOpen } mini>
					<DeleteIcon />
				</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle id="responsive-dialog-title">Seguro que quieres eliminar esto?</DialogTitle>
          <DialogContent >
            <DialogContentText >
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button className='finalButton'  onClick={this.handleClose} variant="raised" color="secondary" >
							Eliminar
      		  </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(DeleteButton);
