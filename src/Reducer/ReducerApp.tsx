/* eslint-disable prettier/prettier */
import { IAppState } from '../Store/IAppState';
import { Actions } from '../Actions/ActionsTypes';

export function reduceSearchBooks(
  state: IAppState,
  action: Actions,
): IAppState {
  return { searchBooks: action.payload };
}
