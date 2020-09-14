/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewBooks from '../View/ViewBooks';
import ViewBookDetails from '../View/ViewBookDetails';
import ViewFavoriteBooks from '../View/ViewFavoriteBooks';

interface IProps {}
const Launcher:React.FC<IProps> =  () => {
    const stackNavigator = createStackNavigator();

    return (
        <NavigationContainer>
            <stackNavigator.Navigator initialRouteName="Books">
                <stackNavigator.Screen name="Books" component={ViewBooks} />
                <stackNavigator.Screen name="BookDetails" component={ViewBookDetails} />
                <stackNavigator.Screen name="FavoriteBooks" component={ViewFavoriteBooks} />
            </stackNavigator.Navigator>
        </NavigationContainer>
    );
};

export default Launcher;
