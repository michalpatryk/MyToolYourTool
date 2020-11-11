import React from 'react';

import Header2 from '../../components/headers/Header2.js';
import Tile1 from '../../components/headers/Tile1';
import HorizontalNav2 from '../../components/horizontal-navs/HorizontalNav2';
import Grid from '@material-ui/core/Grid';

export default function Category() {
  return (
    <React.Fragment>
       <HorizontalNav2
        content={{
          brand: {
            text: ' ',
            image: 'mui\src\components\headers\pobrane.jpg',
            width: '120',
          },
          'link1': 'Home',
          'link2': 'Categories',
          'link3': 'Sign in',
        }}
      />
      <Header2 content={ {
        'badge': 'My tool is your tool',
        'header': 'Exchange you tools',
       } } />
    <Grid container spacing={0.2} justify="center">
      <Grid item xs={2} >
      <Tile1 content={ { 'name':'Shovel','amount':'10', } } />
      </Grid>  
      <Grid item xs={2} >
      <Tile1 content={ {'name':'Scissors', 'amount':'1', } } />
      </Grid> 
      <Grid item xs={2} >
      <Tile1 content={ {'name':'Mower', 'amount':'5', } } />
      </Grid>
      <Grid item xs={2} >
      <Tile1 content={ {'name':'Screwdriver', 'amount':'4', } } />
      </Grid> 
      <Grid item xs={2} >
      <Tile1 content={ {'name':'Screwdriver', 'amount':'4', } } />
      </Grid> 
      </Grid>
      <Grid container spacing={0.2} justify="center">
      <Grid item xs={2} >
      <Tile1 content={ { 'name':'Shovel','amount':'10', } } />
      </Grid>  
      <Grid item xs={2} >
      <Tile1 content={ {'name':'Scissors', 'amount':'1', } } />
      </Grid> 
      <Grid item xs={2} >
      <Tile1 content={ {'name':'Mower', 'amount':'5', } } />
      </Grid>
      <Grid item xs={2} >
      <Tile1 content={ {'name':'Screwdriver', 'amount':'4', } } />
      </Grid> 
      <Grid item xs={2} >
      <Tile1 content={ {'name':'Screwdriver', 'amount':'4', } } />
      </Grid> 
      </Grid>
    </React.Fragment>
  );
}

