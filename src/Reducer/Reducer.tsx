/* eslint-disable prettier/prettier */
import { ActionType, Actions } from '../Actions/ActionsTypes';
import { IAppState } from '../Store/IAppState';
import { init } from './ReducerApp';

export const initialState:IAppState  = {
  test: 'init',
};

function Reducer(
  state: IAppState,
  action: Actions,
): IAppState {
  switch (action.type) {
    case ActionType.INIT:
      return { ...state, ...init(state, action) };
  default:
      return state;
  }
}

export default Reducer;
