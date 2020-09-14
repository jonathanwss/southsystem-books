/* eslint-disable prettier/prettier */
import Realm from 'realm';
import Book from '../Schema/Book';

export default async () => {
    return await Realm.open({
        schema: [
            Book.schema,
        ],
    });
};

