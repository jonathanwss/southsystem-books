/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import { Searchbar, Card, Text } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import PageHeaderTitle from '../Components/Headers/PageHeaderTitle';
import PageHeader from '../Components/Headers/PageHeader';
import HeaderTitle from '../Components/Headers/HeaderTitle';
import { useDispatch, useSelector } from '../Store/Provider';
import { searchBookBySearchTerm } from '../Actions/ActionsSearch';
import ImageList from '../Components/ImageList';
import { IVolume } from '../Store/IGoogleApiBooks';
import { ActionType } from '../Actions/ActionsTypes';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { addFavoriteBook, getFavoriteBooksFromRealm, removeFavoriteBook } from '../Actions/ActionsBook';

interface IProps {}

const ViewBooks: React.FC<IProps> = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();
    const books = useSelector(state => state.searchBooks);
    const favotireBooks = useSelector(state => state.favoriteBooks);

    useEffect(() => {
        dispatch(searchBookBySearchTerm('naruto', 0));
        dispatch(getFavoriteBooksFromRealm());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const _convertToIData = (volumes: IVolume[]) => {
        const _converted = volumes
                            .flatMap(vol => {
                                const title = vol.volumeInfo.title;
                                const imageUri = vol.volumeInfo.imageLinks ? vol.volumeInfo.imageLinks.smallThumbnail : 'https://tutaki.org.nz/wp-content/uploads/2019/04/no-image-1.png';
                                const isFavorite = favotireBooks.some(book => book.id === vol.id);
                                return { title, imageUri, data: vol, isFavorite: isFavorite };
                            });

        return _converted;
    };

    useEffect(() => {
        setPage(0);
    }, [search]);

    const _search = (pageSelected: number) => {
        if (search && pageSelected >= 0){
            setPage(pageSelected);
            dispatch(searchBookBySearchTerm(search, pageSelected));
        }
    };

    const _onPress = (volume: IVolume) => {
        dispatch({ type: ActionType.SELECT_BOOK, payload: volume });
        navigation.navigate('BookDetails');
    };

    const _onFavorite = (volume: IVolume, isFavorite: boolean) => {
        if (isFavorite){
            dispatch(removeFavoriteBook(volume));
        } else {
            dispatch(addFavoriteBook(volume));
        }
    };

    return (
        <View style={styles.view}>
            <View>
                <PageHeader>
                    <PageHeaderTitle>
                        <HeaderTitle
                        avatarItem={<></>}
                        avatarTitle={'Google books filter'}
                        avatarDescription={''}
                        />
                    </PageHeaderTitle>
                </PageHeader>
            </View>
            <View style={styles.container}>
            <Card >
                <Card.Content>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={setSearch}
                        value={search}
                        onIconPress={() => _search(0)}
                    />
                    <View style={styles.space} />
                    <View style={styles.viewRow}>
                        <View style={styles.previousStyle}>
                            <TouchableOpacity onPress={() => _search(page - 10)}>
                                <Text> {'< Previous page'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => _search(page + 10)}>
                                <Text>{'Next page >'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.space} />
                    {
                        books ?
                        <ScrollView style={styles.scroll}>
                            <ImageList onFavoritePress={_onFavorite} onPress={_onPress} data={_convertToIData(books.items)} />
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

export default ViewBooks;

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
