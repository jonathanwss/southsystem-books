/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewBooks from '../View/ViewBooks';
import ViewBookDetails from '../View/ViewBookDetails';

interface IProps {}
const Launcher:React.FC<IProps> =  () => {
    const stackNavigator = createStackNavigator();

    return (
        <NavigationContainer>
            <stackNavigator.Navigator initialRouteName="Books">
                <stackNavigator.Screen name="Books" component={ViewBooks} />
                <stackNavigator.Screen name="BookDetails" component={ViewBookDetails} />
            </stackNavigator.Navigator>
        </NavigationContainer>
    );
};

export default Launcher;
