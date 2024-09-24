import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherData, fetchForecastData } from '../../api/weatherApi';

export const getWeather = createAsyncThunk('weather/getWeather', async (city: string) => {
    const data = await fetchWeatherData(city);
    return data;
});

export const getForecast = createAsyncThunk('weather/getForecast', async (city: string) => {
    const data = await fetchForecastData(city);
    return data;
});

interface WeatherState {
    current: any;
    forecast: any;
    loading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    current: null,
    forecast: null,
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.current = action.payload;
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Failed to fetch weather data';
            })
            .addCase(getForecast.fulfilled, (state, action) => {
                state.forecast = action.payload;
            });
    },
});

export default weatherSlice.reducer;
