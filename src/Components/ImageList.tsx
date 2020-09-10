/* eslint-disable prettier/prettier */
import { FlatList, TouchableOpacity, View, ImageBackground, Text, StyleSheet } from 'react-native';
import React from 'react';
import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';

interface IProps{
    data: IData[];
    onPress: any;
}

interface IData{
    title: string;
    imageUri: string;
    data: any;
}



const ImageList: React.FC<IProps> = (props) => {

    const renderItem = (item: IData) => {
        return (
            <TouchableOpacity onPress={() => {
                    if (props.onPress){
                        props.onPress(item.data);
                    }
                }} >
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
