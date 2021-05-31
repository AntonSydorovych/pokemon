import React from 'react';
//import styles from './styles/pokefilter.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [attackType, setAttackType] = React.useState('');

  const handleChange = (event) => {
    setAttackType(event.target.value);
    props.filter(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Attack Types</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={attackType}
          onChange={handleChange}
        >
          <MenuItem  value="1">normal</MenuItem>
          <MenuItem  value="2">fighting</MenuItem>
          <MenuItem  value="3">flying</MenuItem>
          <MenuItem  value="4">poison</MenuItem>
          <MenuItem  value="5">ground</MenuItem>
          <MenuItem  value="6">rock</MenuItem>
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
    </div>
  );
}

