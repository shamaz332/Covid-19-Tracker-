import React, { Component } from "react";
import {Cardd,Chart,CountryPicker} from './components'
import { fetchedData } from "./components/api/Api";
import "./components/App.module.css";
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
      <div>
        <Cardd data={data}/>
        
       <Chart   data={data}/>
      
      
      </div>
    );
  }
}
export default App;
