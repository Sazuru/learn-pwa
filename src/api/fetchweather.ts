import axios from "axios";

const URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_KEY = `e9b21dc5ad93ef929e50788c97c95c03`;
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
