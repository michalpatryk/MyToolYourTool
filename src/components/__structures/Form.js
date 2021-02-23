import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        backgroundColor: theme.palette.action.hover,
      },
    },
    checked: {},
  }));
  
export default function AddressForm(props) {
    const classes = useStyles();

  const content = {
    'name':'',
    'description': '',
    'condition': '',
    'image': '',
    ...props.content
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <React.Fragment>
        <br></br>
      <Grid container spacing={3}>
         <Grid item xs={12}>
          <TextField
            variant="outlined"
            id="name"
            name="name"
            label="Name of the advertisement"
            multiline
            rows={1}
            rowsMax={1}
            fullWidth
            InputProps={{
                readOnly: true,
              }}
            defaultValue={content['name']}
          />
        </Grid>
      <Grid item xs={12}>
          <TextField
            variant="outlined"
            id="description"
            name="description"
            label="Desription of the item"
            multiline
            rows={10}
            rowsMax={10}
            fullWidth
            InputProps={{
                readOnly: true,
              }}
            defaultValue={content['description']}
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
            variant="outlined"
            id="condition"
            name="condition"
            label="Condition"
            multiline
            rows={1}
            rowsMax={1}
            fullWidth
            InputProps={{
                readOnly: true,
              }}
            defaultValue={content['condition']}
          /> 
        </Grid>
        </Grid>
       
    </React.Fragment>
    </form>
  );
}