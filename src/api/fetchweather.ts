import axios from "axios";
import { API_KEY } from "./apiToken";

const URL = `https://api.openweathermap.org/data/2.5/weather`;
export const fetchWeather = async (query: string) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
