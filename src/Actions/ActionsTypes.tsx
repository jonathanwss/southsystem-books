/* eslint-disable prettier/prettier */

import { ISearchBooks, IVolume } from '../Store/IGoogleApiBooks';

export enum ActionType {
  REDUCE_SEARCH_BOOKS = 'REDUCE_SEARCH_BOOKS',
  SELECT_BOOK = 'SELECT_BOOK'
}

export interface IReduceSearchBooks {
  type: ActionType.REDUCE_SEARCH_BOOKS;
  payload: ISearchBooks;
}

export interface ISelectBook{
    type: ActionType.SELECT_BOOK,
    payload: IVolume
}

export type Actions =
  | IReduceSearchBooks
  | ISelectBook
