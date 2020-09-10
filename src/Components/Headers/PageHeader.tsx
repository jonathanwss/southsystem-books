/* eslint-disable prettier/prettier */
import React from 'react';

import { View, StyleSheet } from 'react-native';

interface IProps {

}

const PageHeader: React.FC<IProps> = (props) => {
    return (
        <View style={styles.headerContent}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContent: {
        width: '100%',
    },
});

export default PageHeader;
