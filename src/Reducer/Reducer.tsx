/* eslint-disable prettier/prettier */
import { ActionType, Actions } from '../Actions/ActionsTypes';
import { IAppState } from '../Store/IAppState';
import { reduceSearchBooks, reduceSelectedBook } from './ReducerApp';

export const initialState:IAppState  = {
    selectedBook: undefined
};

function Reducer(
  state: IAppState,
  action: Actions,
): IAppState {
  switch (action.type) {
    case ActionType.REDUCE_SEARCH_BOOKS:
      return { ...state, ...reduceSearchBooks(state, action) };
    case ActionType.SELECT_BOOK:
        return { ...state, ...reduceSelectedBook(state, action) };
    default:
      return state;
  }
}

export default Reducer;
