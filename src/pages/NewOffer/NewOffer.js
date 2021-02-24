import React, { useState, useEffect } from 'react';

import axiosAPI from '../../API/ourAPI/API';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormToFill from '../../components/__structures/FormToFill';
import HorizontalNavLogCheck from '../../components/horizontal-navs/HorizontalNavLogCheck';
import ImageUpload from '../../components/__structures/ImageUpload'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));


export default function Checkout() {
  const classes = useStyles();
  
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    
    <React.Fragment>
      <HorizontalNavLogCheck
      content={{
        brand: {
          text: ' ',
          image: '',
          width: '120',
        },
        'link1': 'Home',
        'link2': 'Categories',
        'link3': 'Sign in',
      }}
    />

      <CssBaseline />
      <main className={classes.layout}>
        <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <ImageUpload />
         </Grid>
        <Grid item xs={6}>
          <Typography component="h1" variant="h4" align="center">
             Description of the offer
          </Typography>
          <br></br><br></br>
         <FormToFill/>
         </Grid>
        </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
}