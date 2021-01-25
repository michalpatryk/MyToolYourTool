import React from 'react';

import Header2 from '../../components/headers/Header2.js';
import HorizontalNavLogCheck from '../../components/horizontal-navs/HorizontalNavLogCheck';
import ItemList from '../../components/CategoriesList'

export default function Example() {
  return (
    <React.Fragment>
       <HorizontalNavLogCheck
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
      <ItemList category='example'/>
    </React.Fragment>
  );
}

