/* eslint-disable prettier/prettier */
import { FlatList, TouchableOpacity, View, ImageBackground, Text, StyleSheet } from 'react-native';
import React from 'react';

interface IProps{
    data: IData[];
}

interface IData{
    title: string;
    imageUri: string;
}

const renderItem = (item: IData) => {
    return (
        <TouchableOpacity onPress={() => console.warn("A")} >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground style={styles.imageSize} source={ { uri: item.imageUri }} />
                </View>
                <View style={styles.titleContainer}>
                    <Text>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const ImageList: React.FC<IProps> = (props) => {
    return (
        <FlatList
            data={props.data}
            renderItem={(item) => renderItem(item.item)}
        />
    );
};

export default ImageList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
    },
    titleContainer:{
        flex: 2,
    },
    imageSize:{
        width: 100,
        height: 100,
    },
});
