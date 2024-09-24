import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../redux/slices/weatherSlice';
import { RootState } from '../redux/store';

const HomeScreen = ({ navigation }) => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const weather = useSelector((state: RootState) => state.weather);

    const handleSearch = () => {
        if (city) {
            dispatch(getWeather(city));
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter city"
                value={city}
                onChangeText={setCity}
            />
            <Button title="Search" onPress={handleSearch} />

            {weather.loading ? <Text>Loading...</Text> : weather.current && (
                <View>
                    <Text>Temperature: {weather.current.main.temp} °C</Text>
                    <Text>Humidity: {weather.current.main.humidity} %</Text>
                    <Text>Wind Speed: {weather.current.wind.speed} m/s</Text>
                    <Button title="View 5-day Forecast" onPress={() => navigation.navigate('Forecast', { city })} />
                </View>
            )}
            {weather.error && <Text>{weather.error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20,
    },
});

export default HomeScreen;
