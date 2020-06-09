import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchedData = async()=>{
    try{
        const {data} = await axios.get(url)
        const modifiedData = {
            confirmed : data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate

        }
        return modifiedData
    }
    catch(error){
        
    }

}

// export const dailyData = async ()=>{
//     try{
// const {data} = await axios.get(`${url}/daily`)
// return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));


//     }
//     catch(error){

//     }
// }
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
      return error;
    }
  };