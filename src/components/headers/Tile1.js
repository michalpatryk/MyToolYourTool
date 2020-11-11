import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: 210,
    height: 240,
    color: "#fff",
    background:"#37474f",
  },
  image: {
    width: 165,
    height: 165,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Tile(props) {
  const classes = useStyles();

  const content = {
    'name':'',
    'amount':'',
    ...props.content
  };

  return (
    <div className={classes.root}>
      <Paper elevation={20} className={classes.paper}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="" />
            </ButtonBase> 
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs={3}>
                <Typography gutterBottom variant="item" component="span">{content['name']}</Typography>
              </Grid>
            </Grid>
            <Grid item>
            <Typography gutterBottom variant="amount"component="span">{content['amount']}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
