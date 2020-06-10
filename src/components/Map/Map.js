import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
    };
  }
  
  componentDidMount() {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])

      .then((response) => {
        this.setState({ patient: response[0].data });
        this.setState({ countries: response[1].data });
        // console.log(response.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }
 
  render() {
  
    const allCountry = this.state.countries.map((country, i) => {
      return (
        <div
          lat={country.countryInfo.lat}
          lng={country.countryInfo.long}
          style={{
            color: "red",
            backgroundColor: "#FFF",
            height: "50px",
            width: "50px",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "30%",
          }}
        >
          <img height="10px" src={country.countryInfo.flag} alt="flags" />
          <br></br>
          {country.cases}
        </div>
      );
    });

    return (

        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB_ZZuFi35J3-17e64iqegfQZPphNn2vto",
            }}
            defaultCenter={{ lat: 30.3753, lng: 69.3451 }}
            defaultZoom={4}
          >
            {allCountry}
          </GoogleMapReact>
        </div>
   
    );
  }
}

export default Map;