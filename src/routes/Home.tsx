import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth0();

  const displayWeather = () => {
    if (city !== "") {
      navigate(`/weather`, { state: { city } });
    }
  };

  return (
    <div className="container mx-auto flex flex-col flex-1 items-center justify-center space-y-8">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">{user?.name}</div>
        <Link
          to={`https://github.com/${user?.nickname}`}
          target="_blank"
          className="hover:underline text-sky-500"
        >
          github.com/{user?.nickname}
        </Link>
      </div>
      <div className="flex flex-col space-y-2 min-w-[250px] items-center">
        <input
          type="text"
          name="price"
          id="price"
          value={city}
          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className=" bg-sky-500 hover:bg-sky-600 text-white rounded-md px-4 py-2 w-fit"
          onClick={() => displayWeather()}
        >
          Display Weather
        </button>
      </div>
    </div>
  );
};

export default Home;
