import React from 'react';
import { Navigation } from './navigation';

import { default as GrommetApp } from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import CreateProductForm from './product/CreateProductForm'
import ProductList from './productList/container/ProductList';

export const App = ( { children } ) => (
  <GrommetApp centered={true}>
    <Article>
      <Tabs>
        <Tab title='Shopping List'>
          <ProductList />
        </Tab>
        <Tab title='Add new Items'>
          <CreateProductForm />
        </Tab>
      </Tabs>
    </Article>
    {/*<Article>
       { children }
     </Article>*/}
  </GrommetApp>
)