import React, { Component } from "react";
// import {Card,Chart,CountryPicker} from './components'
import { fetchedData } from "./components/api/Api";
import "./App.module.css";
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
    return <div className="App">
      
    </div>;
  }
}

export default App;
