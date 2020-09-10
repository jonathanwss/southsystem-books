/* eslint-disable prettier/prettier */
import React from 'react';
import { Card } from 'react-native-paper';

import { StyleSheet } from 'react-native';

interface IProps {

}

const PageHeaderTitle: React.FC<IProps> = (props) => {
    return (
        <Card >
            <Card.Content style={styles.headerTitle}>
                {props.children}
            </Card.Content>
        </Card >
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
});

export default PageHeaderTitle;
