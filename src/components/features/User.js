
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#00BCD4",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  username:{
    color:"rgba(0, 0, 0, 0.87)"
  }
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    'login': '',
    'rate':'',
    'link':'',
    ...props.content
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <Card className={classes.root}>
          <br></br>
         <Typography component="h6" variant="h6" align= "center">
         <Link href={content['link']} className={classes.username} variant="inherit"  >
         {content['login']}
              </Link>
          </Typography>
        <Box component="fieldset" borderColor="transparent" align= "center">
        <Rating name="read-only" value={content['rate']} readOnly />
      </Box>
    </Card>
  );
}
