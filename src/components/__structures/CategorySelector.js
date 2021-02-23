import React, { useState, useEffect } from 'react';
import axiosAPI from '../../API/ourAPI/API';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(4),
  },
  formControl: {
    minWidth: 180,
    minHeight:40,
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function ControlledOpenSelect({setCategory}) {
  const classes = useStyles();
  const [val, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    setCategory(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [content, setContent] = React.useState([]);
  useEffect(() =>{
    axiosAPI.get('https://my-tool-your-tool-dev.herokuapp.com/categories')
    .then(res => {
      setContent(res.data)
      //console.log(res.data)
    })
    .catch(error => {
      setContent([
        { id: '0', name: 'BŁĄD WCZYTYWANIA'}])
    })
  },[])

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{content['label']}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={val}
          onChange={handleChange}
        >
          {content.map((e, key) => {
              return <MenuItem key={key} value={e.id}>{e.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
