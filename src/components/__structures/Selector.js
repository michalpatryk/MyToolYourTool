import React from 'react';
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

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [val, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const content = {
    'label':'',
    'first': '',
    'second': '',
    'third': '',
    'fourth':'',
    ...props.content
  };

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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>{content['first']}</MenuItem>
          <MenuItem value={1}>{content['second']}</MenuItem>
          <MenuItem value={2}>{content['third']}</MenuItem>
          <MenuItem value={3}>{content['fourth']}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
