/* eslint-disable prettier/prettier */
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Card, Text } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import PageHeaderTitle from '../Components/Headers/PageHeaderTitle';
import PageHeader from '../Components/Headers/PageHeader';
import HeaderTitle from '../Components/Headers/HeaderTitle';
import { useDispatch, useSelector } from '../Store/Provider';

interface IProps {}

const ViewBookDetails: React.FC<IProps> = () => {
    const dispatch = useDispatch();
    const selectedBook = useSelector(state => state.selectedBook);

    useEffect(() => {
        console.warn(selectedBook);
    }, [selectedBook]);

    return (
        <View style={styles.view}>
            <View>
                <PageHeader>
                    <PageHeaderTitle>
                        <HeaderTitle
                        avatarItem={<></>}
                        avatarTitle={selectedBook ? selectedBook.volumeInfo.title : ''}
                        avatarDescription={selectedBook ? selectedBook.volumeInfo.authors.join(',') : ''}
                        />
                    </PageHeaderTitle>
                </PageHeader>
            </View>
            <View style={styles.container}>
                <Card >
                    <Card.Content>
                        {
                            selectedBook ?
                            <View style={styles.center}>
                                <ImageBackground style={styles.image} source={{ uri: selectedBook.volumeInfo.imageLinks.smallThumbnail }} />
                                 <Text>{selectedBook.volumeInfo.description}</Text>
                            </View>
                            :
                            <></>
                        }
                    </Card.Content>
                </Card >
            </View>
        </View>
    );
};

export default ViewBookDetails;

const styles = StyleSheet.create({
    center: {
    },
    view: {
        flex: 1,
    },
    container: {
        width: '100%',
        height: '100%',
    },
    space: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: 150,
        height: 150,
    },
});
