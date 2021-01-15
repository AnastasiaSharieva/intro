import React, { useState, useEffect } from 'react';
import Head from './Components/Header/Head';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

const App = () => {

  const [content, setContent] = useState([]);

  useEffect(() => {
    const base = [
      {name: 'Current Deals', number: '1', promotions: 'Feldman Equities', irr: '55', equity: '780', income: '30', start: '21', distributionPeriod: '7'},
      {name: 'Current ', number: '2', promotions: 'Feldman ', irr: '9', equity: '5', income: '50', start: '30', distributionPeriod: '6'},
      {name: 'Deals', number: '3', promotions: ' Equities', irr: '1', equity: '43', income: '40', start: '20', distributionPeriod: '1'},
      {name: 'Cur', number: '4', promotions: 'Feldman ', irr: '4', equity: '18', income: '330', start: '10', distributionPeriod: '2'},
      {name: 'Dea', number: '5', promotions: 'Feldman Equities', irr: '40', equity: '230', income: '10', start: '12', distributionPeriod: '3'},
      {name: 'Current Deals', number: '6', promotions: 'Feldman Equities', irr: '55', equity: '780', income: '30', start: '21', distributionPeriod: '7'},
      {name: 'Current ', number: '7', promotions: 'Feldman ', irr: '9', equity: '5', income: '50', start: '30', distributionPeriod: '6'},
      {name: 'Deals', number: '8', promotions: ' Equities', irr: '1', equity: '43', income: '40', start: '20', distributionPeriod: '1'},
      {name: 'Cur', number: '9', promotions: 'Feldman ', irr: '4', equity: '18', income: '330', start: '10', distributionPeriod: '2'}, {name: 'Current Deals', number: '1', promotions: 'Feldman Equities', irr: '55', equity: '780', income: '30', start: '21', distributionPeriod: '7'},
      {name: 'Current ', number: '10', promotions: 'Feldman ', irr: '9', equity: '5', income: '50', start: '30', distributionPeriod: '6'},
      {name: 'Deals', number: '11', promotions: ' Equities', irr: '1', equity: '43', income: '40', start: '20', distributionPeriod: '1'},
      {name: 'Cur', number: '12', promotions: 'Feldman ', irr: '4', equity: '18', income: '330', start: '10', distributionPeriod: '2'},
    ];

    setContent(base);
  },[])
 

  return (
    <div>
      <Head />
      <Content items = {content} />
      <Footer/>
    </div>
  );
}

export default App;
