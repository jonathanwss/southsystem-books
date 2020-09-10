/* eslint-disable prettier/prettier */

import { ActionDispatcher } from '../Store/Provider';
import { serviceGetBooksBySearchTerm } from '../Services/Service';
import { ActionType } from './ActionsTypes';

export function searchBookBySearchTerm(searchTerm: string, page: number): ActionDispatcher{
    return async function (dispatch) {
        try {
            const books = await serviceGetBooksBySearchTerm(searchTerm, page);

            dispatch({ type: ActionType.REDUCE_SEARCH_BOOKS, payload: books });
        } catch (e){

        }
    };
}
