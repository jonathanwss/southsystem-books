/* eslint-disable prettier/prettier */

import { ISearchBooks } from '../Store/IGoogleApiBooks';

export enum ActionType {
  REDUCE_SEARCH_BOOKS = 'REDUCE_SEARCH_BOOKS',
}

export interface IReduceSearchBooks {
  type: ActionType.REDUCE_SEARCH_BOOKS;
  payload: ISearchBooks;
}

export type Actions =
  | IReduceSearchBooks
