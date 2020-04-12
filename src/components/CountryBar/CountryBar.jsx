import React, { useEffect, useState } from 'react';
import {fetchCountries} from './../../api';
import styles from './CountryBar.module.css';
import cx from 'classnames';
const CountryBar = ({setCountry}) => {

    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        async function loadData() {
            const data = await fetchCountries();
            setCountries(data);
        }
        loadData();
    },[]);


    return (
  
        <select className={cx(styles.formControl)} onChange={(e)=>{setCountry(e.target.value)}}>
            <option key={-1} value='Global'>Global</option>
            {countries.map((country,key) =>
                <option key={key} value={country}>{country}</option>
            )}
        </select>
        
    );
}

export default CountryBar;