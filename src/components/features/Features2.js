import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import StorageIcon from '@material-ui/icons/Storage';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginBottom: theme.spacing(1),
  }
}));

export default function Features(props) {
  const classes = useStyles();

  const content = {
    'col1-header': '',
    'col1-desc': '',
    'col2-header': '',
    'col2-desc': '',
    'col3-header': 's',
    'col3-desc': '',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StorageIcon color="primary" fontSize="large" className={classes.icon} />
              <Typography variant="h6" component="h3" gutterBottom={true}>{content['col1-header']}</Typography>
              <Typography variant="body1" component="p">{content['col1-desc']}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <VerifiedUserIcon color="primary" fontSize="large" className={classes.icon} />
              <Typography variant="h6" component="h3" gutterBottom={true}>{content['col2-header']}</Typography>
              <Typography variant="body1" component="p">{content['col2-desc']}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <ShutterSpeedIcon color="primary" fontSize="large" className={classes.icon} />
              <Typography variant="h6" component="h3" gutterBottom={true}>{content['col3-header']}</Typography>
              <Typography variant="body1" component="p">{content['col3-desc']}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}