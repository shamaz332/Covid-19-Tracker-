import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from "../api/Api";
import styles from './Country.module.css'
const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);

  useEffect(() => {
    const fetchedCountries = async () => {
      setfetchedCountries(await countries());
    };
    fetchedCountries();
  }, [setfetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option>Global</option>
        {fetchedCountries.map((countryName,i) => <option key={i} value={countryName}> {countryName}</option>)}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
