import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

 const useStyles = makeStyles((theme) => ({
   primaryAction: {
     marginRight: theme.spacing(2),
     [theme.breakpoints.down('xs')]: {
       width: '100%',
       marginRight: theme.spacing(0),
       marginBottom: theme.spacing(2),
     }
  },
 }));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: '', width: 120 },
    'header': '',
    'description': '',
    'primary-action': '',
    'secondary-action': '',
    ...props.content
  };

  let brand = content['brand'].text || '';
  if (content['brand'].image) {
    brand = <img src={ content['brand'].image } alt="" width={ content['brand'].width } />;
  }
  return (
    <section>
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Typography variant="h3" component="h2" gutterBottom={true}>{content['header']}</Typography>
          <Typography variant="h5" color="#00897B" paragraph={true}>{content['description']}</Typography>
          <Box mt={4}>
            <Button variant="contained" color="primary"  size="large" href="/signup" className={classes.primaryAction}>{content['primary-action']} </Button>
            <Button variant="contained" color="secondary" size="large" href="/category" className={classes.primaryAction}>{content['secondary-action']}</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}