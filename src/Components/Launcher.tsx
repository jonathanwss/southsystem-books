/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

const test: React.FC<IProps> = () => {
    return (
        <Text>Test</Text>
    );
};

interface IProps {}
const Launcher:React.FC<IProps> =  () => {
    const stackNavigator = createStackNavigator();

    return (
        <NavigationContainer>
            <stackNavigator.Navigator>
                <stackNavigator.Screen name="home" component={test} />
            </stackNavigator.Navigator>
        </NavigationContainer>
    );
};

export default Launcher;
