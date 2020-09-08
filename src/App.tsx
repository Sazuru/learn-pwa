import React, { useState } from "react";
import { fetchWeather } from "./api/fetchweather";
import "./App.css";

type Weather = {
  main?: Main;
  name?: string;
  sys?: Sys;
};

type Main = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
};

type Sys = {
  country: string;
  id: number;
  sunrise: Date;
  sunset: Date;
  type: number;
};

export const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<Partial<Weather>>({});

  const search = async (e: { key: string }) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      console.log(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather?.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather?.name}</span>
            <sup>{weather?.sys?.country ?? ""}</sup>
          </h2>
        </div>
      )}
    </div>
  );
};
