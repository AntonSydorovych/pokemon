import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import style from '../styles/SuperSelector.module.scss'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [attackType, setAttackType] = React.useState('');

  const handleChange = (event) => {
    setAttackType(event.target.value);
    
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.pokemonFilter(attackType);
  };

  return (
    <div className={style.mainWrapper}>
      <Button className={style.button} onClick={handleClickOpen}>Attack type</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle className={style.dialogTitle}>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Attack type</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={attackType}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="1">normal</MenuItem>
                <MenuItem value="2">fighting</MenuItem>
                <MenuItem value="3">flying</MenuItem>
                <MenuItem value="4">poison</MenuItem>
                <MenuItem value="5">ground</MenuItem>
                <MenuItem value="6">rock</MenuItem>
                <MenuItem value="7">bug</MenuItem>
                <MenuItem value="8">ghost</MenuItem>
                <MenuItem value="9">steel</MenuItem>
                <MenuItem value="10">fire</MenuItem>
                <MenuItem value="11">water</MenuItem>
                <MenuItem value="12">grass</MenuItem>
                <MenuItem value="13">electric</MenuItem>
                <MenuItem value="14">psychic</MenuItem>
                <MenuItem value="15">ice</MenuItem>
                <MenuItem value="16">dragon</MenuItem>
                <MenuItem value="17">dark</MenuItem>
                <MenuItem value="18">fairy</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

//===============================

/*


*/