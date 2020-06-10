import React, { Component } from "react";
import {Cardd,Chart} from './components'
// import Map from './components/Map/Map'
import { fetchedData } from "./components/api/Api";
import styles from "./components/App.module.css";
class App extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const data = await fetchedData();
    console.log(data);
    this.setState({ data: data });
  }

  render() {
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <Cardd data={data}/>
        
       <Chart   data={data}/>
      
      {/* <Map/> */}
      </div>
    );
  }
}
export default App;
