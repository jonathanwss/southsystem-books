/* eslint-disable prettier/prettier */
import { FlatList, TouchableOpacity, View, ImageBackground, Text, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton, Colors } from 'react-native-paper';

interface IProps{
    data: IData[];
    onPress: any;
    onFavoritePress?: any;
}

interface IData{
    title: string;
    imageUri: string;
    data: any;
    isFavorite: boolean;
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
                        <Text style={styles.textTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.starContainer}>
                        <IconButton color={item.isFavorite ? Colors.yellow600 : Colors.black} onPress={() => {
                            if (props.onFavoritePress) {
                                props.onFavoritePress(item.data, item.isFavorite);
                            }
                        }} icon={'star'} />
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
        marginBottom: 5,
    },
    imageContainer: {
        flex: 1,
    },
    titleContainer:{
        flex: 3,
        justifyContent: 'center',
        textAlign: 'center',
        alignContent: 'center',
    },
    starContainer: {
        flex: 1,
    },
    imageSize:{
        width: '100%',
        height: '100%',
    },
    textTitle: {
        textAlign: 'center',
    },
});
