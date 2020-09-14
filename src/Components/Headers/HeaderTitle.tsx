/* eslint-disable prettier/prettier */
import React from 'react';

import {
    View, StyleSheet,
} from 'react-native';

import AvatarElement from '../Avatar/AvatarElement';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
    avatarItem: any;
    avatarTitle: string;
    avatarDescription: string;
    actionTitle?: JSX.Element;
    actionDescription?: any;
}

const HeaderTitle: React.FC<IProps> = (props) => {

    return (
        <View style={styles.headerTitle}>
            <View style={styles.headerTitleShow}>
                <View style={styles.avatar}>
                    <AvatarElement size={48}>{props.avatarItem}</AvatarElement>
                </View>
                <View style={styles.text}>
                    <Text numberOfLines={1} style={styles.avatarTitle}>{props.avatarTitle}</Text>
                    <TouchableOpacity onPress={() => {
                        if (props.actionDescription) {
                            props.actionDescription();
                        }
                    }}>
                        <Text numberOfLines={2} style={styles.avatarDescription}>{props.avatarDescription}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.actionHeader}>
              {props.actionTitle}
            </View>
        </View>
    );
};

export default HeaderTitle;

const styles = StyleSheet.create({
    headerTitle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    headerTitleShow: {
        flexDirection: 'row',
    },
    avatar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingLeft: 10,
        flexDirection: 'column',
    },
    avatarTitle: {
        fontSize: 20,
    },
    avatarDescription: {
        fontSize: 14,
    },
    space: {
        flex: 1,
        padding: 10,
    },
    actionHeader: {
        flexDirection: 'row-reverse',
    },
});
