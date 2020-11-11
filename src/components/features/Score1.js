import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title1';
import Star from '@material-ui/icons/Star';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Score() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Score review</Title>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <Typography component="p" variant="h4">
        4,86
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 10 November, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View score review
        </Link>
      </div>
    </React.Fragment>
  );
}