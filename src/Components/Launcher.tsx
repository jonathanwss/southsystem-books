/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const test: React.FC<IProps> = ({ navigation }) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('test')} style={{ color: 'black', fontSize: 50 }}>Test</Text>
        </View> 
    );
};

const test2: React.FC<IProps> = () => {
    return (
        <Text style={{ color: 'black' }}>Test 2</Text>
    );
};

interface IProps {}
const Launcher:React.FC<IProps> =  () => {
    const stackNavigator = createStackNavigator();

    return (
        <NavigationContainer>
            <stackNavigator.Navigator initialRouteName="home">
                <stackNavigator.Screen name="home" component={test} />
                <stackNavigator.Screen name="test" component={test2} />
            </stackNavigator.Navigator>
        </NavigationContainer>
    );
};

export default Launcher;
