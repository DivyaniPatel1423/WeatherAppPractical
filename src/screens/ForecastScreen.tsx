import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getForecast } from '../redux/slices/weatherSlice';
import { RootState } from '../redux/store';

const ForecastScreen = ({ route }) => {
    const { city } = route.params;
    const dispatch = useDispatch();
    const forecast = useSelector((state: RootState) => state.weather.forecast);

    useEffect(() => {
        dispatch(getForecast(city));
    }, [city, dispatch]);

    return (
        <View style={styles.container}>
            <Text>5-Day Forecast for {city}</Text>
            <FlatList
                data={forecast?.list}
                keyExtractor={(item) => item.dt.toString()}
                renderItem={({ item }) => (
                    <View style={styles.forecastItem}>
                        <Text>{new Date(item.dt * 1000).toLocaleDateString()}</Text>
                        <Text>Temp: {item.main.temp} °C</Text>
                        <Text>Weather: {item.weather[0].description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    forecastItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
});

export default ForecastScreen;
