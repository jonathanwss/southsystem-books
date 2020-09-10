/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import { Searchbar, Card } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import PageHeaderTitle from '../Components/Headers/PageHeaderTitle';
import PageHeader from '../Components/Headers/PageHeader';
import HeaderTitle from '../Components/Headers/HeaderTitle';
import { useDispatch, useSelector } from '../Store/Provider';
import { searchBookBySearchTerm } from '../Actions/ActionsSearch';
import ImageList from '../Components/ImageList';
import { IVolume } from '../Store/IGoogleApiBooks';

interface IProps {}

const ViewBooks: React.FC<IProps> = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const books = useSelector(state => state.searchBooks);
    useEffect(() => {
        dispatch(searchBookBySearchTerm('naruto'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const _convertToIData = (volumes: IVolume[]) => {
        const _converted = volumes.flatMap(vol => { return { title: vol.volumeInfo.title, imageUri: vol.volumeInfo.imageLinks.smallThumbnail };});

        return _converted;
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
                    />
                    <View style={styles.space} />
                    {
                        books ?
                        <ImageList data={_convertToIData(books.items)} />
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
});
