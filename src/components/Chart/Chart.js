import React, { useState, useEffect } from "react";
import { Line} from "react-chartjs-2";
import { fetchDailyData } from "../api/Api";

import styles from "./Chart.module.css";
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();

        setDailyData(initialDailyData);
      };
  
      fetchMyAPI();
    })

  const LineChart = 
  (
    dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map( ({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null)

  return <div className={styles.container}>{LineChart}</div>;
};
export default Chart;
