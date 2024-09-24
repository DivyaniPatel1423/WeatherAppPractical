import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city) {
            onSearch(city);
            setCity('');  // Clear the input after search
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
});

export default SearchBar;
