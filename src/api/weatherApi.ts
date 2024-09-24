import axios from 'axios';

const API_KEY = '0b67ab133791170b1dd5a24e3e33d268';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = async (city: string) => {
    const response = await axios.get(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
};

export const fetchForecastData = async (city: string) => {
    const response = await axios.get(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
};
