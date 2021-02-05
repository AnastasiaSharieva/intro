import React, { useState, useEffect } from 'react';
import Head from './Components/Header/Head';
import Content from './Components/pages/Content/Content';
import Footer from './Components/Footer/Footer';
import {Wrapper} from './Components/all/all-styled';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Head />
      <Wrapper>
        <Switch>
          <Route path='/deals' component={Content}/>
          <Route path='/marketplace' component={()=><div>marketplace</div>}/>
          <Route path='/order' component={()=><div>order</div>}/>
          <Route path='/sell_shares' component={()=><div>sell_shares</div>}/>
          <Route component={()=><div>404</div>}/>
        </Switch>
      </Wrapper>
      <Footer/>
    </div>
  );
};

export default App;
