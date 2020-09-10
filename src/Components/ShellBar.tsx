/* eslint-disable prettier/prettier */
import React from 'react';
import { Appbar } from 'react-native-paper';

interface IProps{}

const ShellBar: React.FC<IProps> = () => {
    return (
        <React.Fragment>
            <Appbar.Header>
                <Appbar.Action icon="arrow-left-circle"  onPress={() => console.warn('goBack')} />
            </Appbar.Header>
            <Appbar.Content title="South System Books">
                <Appbar.Action icon="home" onPress={() => console.warn('home')} />
            </Appbar.Content>
        </React.Fragment>
    );
};

export default ShellBar;
