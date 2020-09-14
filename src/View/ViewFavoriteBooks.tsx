/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import React, {  useEffect } from 'react';
import PageHeaderTitle from '../Components/Headers/PageHeaderTitle';
import PageHeader from '../Components/Headers/PageHeader';
import HeaderTitle from '../Components/Headers/HeaderTitle';
import { useDispatch, useSelector } from '../Store/Provider';
import ImageList from '../Components/ImageList';
import { ScrollView } from 'react-native-gesture-handler';
import {  getFavoriteBooksFromRealm } from '../Actions/ActionsBook';
import Book from 'src/Schema/Book';

interface IProps {}

const ViewFavoriteBooks: React.FC<IProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const favotireBooks = useSelector(state => state.favoriteBooks);

    useEffect(() => {
        dispatch(getFavoriteBooksFromRealm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const _convertToIData = (books: Book[]) => {
        const _converted = books
                            .flatMap(book => {
                                const title = book.title;
                                const imageUri = book.uri ? book.uri : 'https://tutaki.org.nz/wp-content/uploads/2019/04/no-image-1.png';
                                return { title, imageUri, data: book, isFavorite: true };
                            });

        return _converted;
    };

    return (
        <View style={styles.view}>
            <View>
                <PageHeader>
                    <PageHeaderTitle>
                        <HeaderTitle
                        avatarItem={<></>}
                        avatarTitle={'Favorite Books'}
                        avatarDescription={''}
                        />
                    </PageHeaderTitle>
                </PageHeader>
            </View>
            <View style={styles.container}>
            <Card >
                <Card.Content>
                    <View style={styles.space} />
                    {
                        favotireBooks ?
                        <ScrollView style={styles.scroll}>
                            <ImageList data={_convertToIData(favotireBooks)} />
                        </ScrollView>
                        :
                        <></>
                    }
                </Card.Content>
            </Card >
            </View>
        </View>
    );
};

export default ViewFavoriteBooks;

const styles = StyleSheet.create({
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
    viewRow: {
        flexDirection: 'row',
    },
    scroll: {
        height: 600,
    },
    previousStyle: {
        flex: 1,
        justifyContent: 'flex-start',
    },
});
