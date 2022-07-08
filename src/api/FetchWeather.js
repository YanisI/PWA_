import React from 'react'
import axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "df5f4dcd555e575ec6ecd9548c05c5a6"


export const FetchWeather = async (query) => {
    const {data } = await axios.get(URL, {
        params: {
            q : query,
            units: "metric",
            appid: API_KEY,
        }
    })
  return data;
}