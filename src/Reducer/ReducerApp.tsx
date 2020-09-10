/* eslint-disable prettier/prettier */
import { IAppState } from '../Store/IAppState';
import { Actions } from '../Actions/ActionsTypes';

export function init(
  state: IAppState,
  action: Actions,
): IAppState {
  return { test: action.payload };
}
