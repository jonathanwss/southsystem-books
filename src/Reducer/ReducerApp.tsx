/* eslint-disable prettier/prettier */
import { IAppState } from '../Store/IAppState';
import { Actions } from '../Actions/ActionsTypes';

export function reduceSearchBooks(
  state: IAppState,
  action: Actions,
) {
  return { searchBooks: action.payload };
}

export function reduceSelectedBook(
    state: IAppState,
    actions: Actions
){
    return { selectedBook: actions.payload };
}

export function reduceFavoriteBooks(
  state: IAppState,
  actions: Actions
){
  return { favoriteBooks: actions.payload };
}
