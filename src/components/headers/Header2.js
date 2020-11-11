import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    background:"default",
  },
}));


export default function Header(props) {
  const classes = useStyles();
  
  const content = {
    'badge': '',
    'header': '',
    ...props.content
  };


  return (
    <React.Fragment>
    <section>
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Typography variant="overline" colour="default" component="span">{content['badge']}</Typography>
          <Typography variant="h3" colour="default" component="h2">{content['header']}</Typography>
          <form className={classes.container} noValidate>
          <Grid item xs={10}> </Grid>
          <Grid item xs={2} >
           <TextField id="data" label="Check-out date" type="date" defaultValue="2020-11-10" inputProps={{style: {fontSize: 18, height:30}}} 
           className={classes.textField} InputLabelProps={{ hrink: true,style: {fontSize: 20}}}/>
          </Grid>
          </form>
        </Box>
      </Container>
    </section>
    </React.Fragment>
  );
}