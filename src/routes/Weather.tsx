import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

type Weather = {
  date: string;
  temp: string;
  description: string;
  main: string;
  pressure: string;
  humidity: string;
};

const Weather = () => {
  const openWeatherAppId = import.meta.env.VITE_REACT_APP_OPENWEATHER_API_ID;
  const navigate = useNavigate();
  const [weather, setWeather] = useState<Weather>();
  const { state } = useLocation();

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${state.city}&appid=${openWeatherAppId}`
      )
      .then((response) => response.data)
      .then((data) => {
        const geodata = data[0];
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${geodata.lat}&lon=${geodata.lon}&units=imperial&appid=${openWeatherAppId}`
          )
          .then((res) => {
            const { data } = res;
            const { main, weather } = data;
            const weatherData = {
              date: moment.unix(data.dt).format("MM/DD/YYYY"),
              temp: main.temp,
              description: weather[0].description,
              main: weather[0].main,
              pressure: main.pressure,
              humidity: main.humidity,
            };
            setWeather(weatherData);
          });
      });
  }, [state]);

  return (
    <div className="container mx-auto flex flex-col flex-1 items-center justify-center p-8">
      {weather && (
        <div className="w-full space-y-2 flex flex-col items-end">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="table-row">
                <th className="px-6 py-3">Date (MM/DD/YYYY)</th>
                <th className="px-6 py-3">Temp (F)</th>
                <th className=" hidden sm:table-cell px-6 py-3">Description</th>
                <th className=" hidden sm:table-cell px-6 py-3">Main</th>
                <th className=" hidden sm:table-cell px-6 py-3">Pressure</th>
                <th className=" hidden sm:table-cell px-6 py-3">Humidity</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              <tr className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <td className="px-6 py-4">{weather.date}</td>
                <td className="px-6 py-4">{weather.temp}</td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {weather.description}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {weather.main}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {weather.pressure}
                </td>
                <td className="hidden sm:table-cell px-6 py-4">
                  {weather.humidity}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="w-full sm:w-fit rounded-md px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Weather;
