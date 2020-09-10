/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface IProps {
    size: number
}

const AvatarElement: React.FC<IProps> = (props) => {
    const styles = StyleSheet.create({
        AvatarElement: {
            borderRadius:45,
            width: props.size,
            height: props.size,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <View style={styles.AvatarElement}>
                {props.children}
        </View>
    );
};

export default AvatarElement;

