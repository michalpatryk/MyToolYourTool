import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from '../components/__structures/Form';
import HorizontalNav2 from '../components/horizontal-navs/HorizontalNav2';
import User from '../components/features/User';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { useLocation } from 'react-router-dom';
import axiosAPI from '../../API/ourAPI/API';

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
  media: {
    margin: 'auto',
    height: 550,
    width: '100%',
    objectFit: 'cover'
  },
  user: {
    background:"#fff"
  }
}));



export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [value, setValue] = React.useState('Controlled');

    const [state, setState] = React.useState({
        checkedRegulations: true,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { search } = useLocation();
  const queryParams = queryString.parse(search);
  const requestUrl = 'https://my-tool-your-tool-dev.herokuapp.com/categories/'+queryParams.id;

  const offer;

  axiosAPI.post(requestUrl)
  .then(res => {
    offer = res.data;
  },
  () => {
      offer = {
        id:0,
        toolName:'test',
        description:'test item',
        toolQuality:'BAD',
        lender: {
          id:0,
          email:'test@test.test',
          firstName:'tester',
          lastName:'testerino',
        }
      }
  }

  )

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
        <Grid item xs={6} direction="column" alignItems="center" justify="center" style={{ minHeight: '60vh' }} >
        <CardMedia
        className={classes.media}
        image="https://www.posprzatajdom.pl/images/FOTKI_SKLEP/KAT00836/kat0836.jpg"
        title="Object"
         />
         
         </Grid>

        <Grid item xs={6}>
        <Grid container spacing={3}>
        <Grid item xs={8}>
            <br></br><br></br>
        <Typography component="h1" variant="h4" align="center">
             Description of the offer
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <Card className={classes.user}>
        <User content={ {'login':'piwo342', 'rate':'3', 'link': 'https://allegro.pl/'}} />
        </Card>
        </Grid>
        </Grid>
          <br></br><br></br>
         <Form content={ {'name':'Łopata','description':'Dobra,sprawna super łopata', 'condition':'Bad'}} />
         </Grid>
        </Grid>
        <Grid item xs={12}>
        <br></br>
        <FormControlLabel
        control={<Checkbox checked={state.checkedRegulations} onChange={handleChange} name="checkedRegulations" />}
        label="I have read, understand, and agree to the above rules and regulations."
         />
         </Grid>
         <Grid container spacing={3}>
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
        <Button  size = 'large' variant = "contained" type="submit" fullWidth  color = "primary"> Borrow</Button>
        </Grid>
        </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
}