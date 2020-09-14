/* eslint-disable prettier/prettier */
import realmBook from '../Repository/RealmBook';
import { ActionDispatcher } from '../Store/Provider';
import { ActionType } from './ActionsTypes';


export function getFavoriteBooksFromRealm(): ActionDispatcher{
    return async function (dispatch) {
        try {
            const books = await realmBook.all();

            dispatch({ type: ActionType.REDUCE_FAVORITE_BOOKS, payload: books });
        } catch (e){

        }
    };
}