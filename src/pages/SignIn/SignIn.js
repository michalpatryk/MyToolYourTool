import React, { useState } from 'react';
import axios from 'axios';
import { useHistory} from "react-router-dom";

import Store from '../../components/App/App.store'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HorizontalNavLogCheck from '../../components/horizontal-navs/HorizontalNavLogCheck';
import axiosAPI from '../../API/ourAPI/API';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    background:"#fff"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInPage() {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const store = Store.useStore()

  async function handleSignIn(){
    await axios.post('https://my-tool-your-tool-dev.herokuapp.com/users/login',
    {email: email,
    password: password})
    .then(res => {
      let data = res.data;
      console.log("Success");
      store.set('authToken')(res.data)
      //axios.defaults.headers.common['Authorization'] = res.data;  //dziala
      //axios.defaults.headers.common['Authorization'] = store.get('authToken') //nie dziala
      axiosAPI.defaults.headers.common['Authorization'] = res.data;
      history.push('/account');
    },
    console.log("Failure"))
  }
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            onClick={handleSignIn}
            //type="submit"
            
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/signup" color="secondary" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </React.Fragment>
  );
}