/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewBooks from '../View/ViewBooks';

interface IProps {}
const Launcher:React.FC<IProps> =  () => {
    const stackNavigator = createStackNavigator();

    return (
        <NavigationContainer>
            <stackNavigator.Navigator initialRouteName="home">
                <stackNavigator.Screen name="Books" component={ViewBooks} />
            </stackNavigator.Navigator>
        </NavigationContainer>
    );
};

export default Launcher;
