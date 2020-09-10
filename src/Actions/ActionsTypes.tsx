/* eslint-disable prettier/prettier */

export enum ActionType {
  INIT = 'INIT',
}

export interface IInit {
  type: ActionType.INIT;
  payload: any;
}

export type Actions =
  | IInit
