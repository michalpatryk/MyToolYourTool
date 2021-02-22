import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Selector from './Selector';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }));

  
export default function AddressForm() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
  return (
    <form className={classes.root} noValidate autoComplete="off">
    <React.Fragment>
        <br></br>
      <Grid container spacing={3}>
         <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            id="name"
            name="name"
            label="Name of the advertisement"
            fullWidth
          />
        </Grid>
      <Grid item xs={12}>
          <TextField
            required
            variant="outlined"
            id="description"
            name="description"
            label="Desription of the item"
            multiline
            rows={10}
            rowsMax={10}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
        <Selector content={ {'label':'Condition','first':'Bad','second':'Satisfactory', 'third':'Good', 'fourth':'Very good'}} />
        </Grid>
        <Grid item xs={6}>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        <Button  size = 'large' variant = "contained" type="submit" fullWidth  color = "primary"> Add</Button>
        </Grid>
        </Grid>
    </React.Fragment>
    </form>
  );
}