import React, { useState, useEffect, Fragment } from 'react';
import styles from './App.module.css';
import image from './assets/header.png';
import {fetchData} from './api';
import {Cards,Chart,CountryBar} from './components';

const App = () =>{

  const [country,setCountry] = useState('Global');
  const [data,setData] = useState({});
  const [loading,setIsLoading] = useState(true);

  useEffect(()=>{
    async function loadData() {
      const dataCards = await fetchData(country);
      setData(dataCards);
      setIsLoading(false)
    }
    loadData();

  },[country])

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19"/>
      {loading
        ?
        <h1>Loading data....</h1>
        :
        (
          <Fragment>
             <br></br>
             <CountryBar
              setCountry={setCountry}
            />
            <Cards
              data={data}
            />
           
            <Chart
              dataset={data}
              country={country}
            />
          </Fragment>
       )
      
      }
      
      
      
    </div>
  );
}

export default App;
