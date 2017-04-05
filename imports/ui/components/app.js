import React from 'react';
import { Navigation } from './navigation';

import { default as GrommetApp } from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import CreateProductForm from './product/CreateProductForm'

export const App = ( { children } ) => (
  <GrommetApp centered={true}>
    <Article>
      <Tabs>
        <Tab title='Lista de compras'>
          // componente de ver a lista
        </Tab>
        <Tab title='Cadastro'>
          <CreateProductForm />
        </Tab>
      </Tabs>
    </Article>
    {/*<Article>
       { children }
     </Article>*/}
  </GrommetApp>
)