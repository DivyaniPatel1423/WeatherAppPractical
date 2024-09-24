// Represents the weather condition information
export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

// Represents the main weather data like temperature, humidity, etc.
export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

// Represents wind data
export interface Wind {
    speed: number;
    deg: number;
}

// Represents the full weather data for a city
export interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: WeatherCondition[];
    base: string;
    main: MainWeatherData;
    visibility: number;
    wind: Wind;
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

// Represents a forecast item for a specific day in the 5-day forecast
export interface ForecastItem {
    dt: number;
    main: MainWeatherData;
    weather: WeatherCondition[];
    clouds: {
        all: number;
    };
    wind: Wind;
    visibility: number;
    pop: number; // probability of precipitation
    sys: {
        pod: string; // part of day (day or night)
    };
    dt_txt: string; // date text in the format "YYYY-MM-DD HH:MM:SS"
}

// Represents the 5-day forecast data
export interface ForecastData {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastItem[];
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
}

// Represents the weather state in Redux
export interface WeatherState {
    current: WeatherData | null;
    forecast: ForecastData | null;
    loading: boolean;
    error: string | null;
}
