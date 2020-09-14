/* eslint-disable prettier/prettier */
import realmBook from '../Repository/RealmBook';
import { ActionDispatcher } from '../Store/Provider';
import { ActionType } from './ActionsTypes';
import { IVolume } from '../Store/IGoogleApiBooks';
import Book from '../Schema/Book';

export function getFavoriteBooksFromRealm(): ActionDispatcher{
    return async function (dispatch) {
        try {
            const books = await realmBook.all();

            dispatch({ type: ActionType.REDUCE_FAVORITE_BOOKS, payload: books });
        } catch (e){

        }
    };
}

export function addFavoriteBook(volume: IVolume): ActionDispatcher{
    return async function (dispatch) {
        try {
            const book = new Book(volume.volumeInfo.description, volume.volumeInfo.title, volume.id);
            realmBook.create(...[book]);

            dispatch(getFavoriteBooksFromRealm());
        } catch (e){

        }
    };
}