/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import React, { useState } from 'react';
import PageHeaderTitle from '../Components/Headers/PageHeaderTitle';
import PageHeader from '../Components/Headers/PageHeader';
import HeaderTitle from '../Components/Headers/HeaderTitle';

interface IProps {}

const ViewBooks: React.FC<IProps> = () => {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.view}>
            <View>
                <PageHeader>
                    <PageHeaderTitle>
                        <HeaderTitle
                        avatarItem={<></>}
                        avatarTitle={''}
                        avatarDescription={''}
                        />
                    </PageHeaderTitle>
                </PageHeader>
            </View>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearch}
                    value={search}
                />
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
        paddingHorizontal: 10,
    },
});
