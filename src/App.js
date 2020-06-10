import React, { Component } from "react";
import { Cardd, Chart, CountryPicker } from "./components";
// import Map from './components/Map/Map'
import { fetchedData, countries } from "./components/api/Api";
import styles from "./components/App.module.css";
class App extends Component {
  state = {
    data: [],
    country: "",
  };

  async componentDidMount() {
    const data = await fetchedData();
    console.log(data);
    this.setState({ data: data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchedData(country);
    this.setState({ data: data,country:country });
  console.log(country)
  };

  render() {
    const { data,country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="Corona"/>
        <Cardd data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>

        {/* <Map/> */}
      </div>
    );
  }
}
export default App;
