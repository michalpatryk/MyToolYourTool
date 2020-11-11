import React from 'react';

import HorizontalNav2 from '../../components/horizontal-navs/HorizontalNav2';
import Header1 from '../../components/headers/Header1';
import Features2 from '../../components/features/Features2';

export default function IndexPage() {
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

      <Header1
      content={{
        'header': 'Share tools with your neighbor',
        'description': 'You need a tool get one with our website now',
        'primary-action': 'Sign up for free',
        'secondary-action': 'Check our offer',
      }}
      />

      <Features2
        content={{
          'col1-header': 'Availability',
          'col1-desc': 'Our website provide a wide range of tools to borrow. You decide when and which tools do you want to borrow ',
          'col2-header': 'Safety',
          'col2-desc': 'All exchanges are controlled to provide the highest safety for both side of the transaction. ',
          'col3-header': 'Timeless',
          'col3-desc': 'You can choose when and what tool tou want to borrow',
        }}
      />
    </React.Fragment>
  );
}

