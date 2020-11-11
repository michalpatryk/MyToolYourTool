import React from 'react';

import Header2 from '../../components/headers/Header2.js';
import HorizontalNav2 from '../../components/horizontal-navs/HorizontalNav2';

import CategoriesList from '../../components/CategoriesList'

export default function Category() {
  return (
    <React.Fragment>
       <HorizontalNav2
        content={{
          brand: {
            text: ' ',
            image: 'mui\\src\\components\\headers\\pobrane.jpg',
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
      <CategoriesList />
    </React.Fragment>
  );
}

