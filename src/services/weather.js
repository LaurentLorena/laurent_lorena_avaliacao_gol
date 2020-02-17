import Axios from 'axios';

const getCityByCoords = (lat, long) =>
  Axios.get(
    `https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`,
  );
