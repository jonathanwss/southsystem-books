import Book from 'src/Schema/Book';
/* eslint-disable prettier/prettier */

import { ISearchBooks, IVolume } from '../Store/IGoogleApiBooks';

export enum ActionType {
  REDUCE_SEARCH_BOOKS = 'REDUCE_SEARCH_BOOKS',
  SELECT_BOOK = 'SELECT_BOOK',
  REDUCE_FAVORITE_BOOKS = 'REDUCE_FAVORITE_BOOKS',
}

export interface IReduceSearchBooks {
  type: ActionType.REDUCE_SEARCH_BOOKS;
  payload: ISearchBooks;
}

export interface ISelectBook{
    type: ActionType.SELECT_BOOK,
    payload: IVolume
}

export interface IReduceFavoriteBooks{
  type: ActionType.REDUCE_FAVORITE_BOOKS,
  payload: Book[]
}

export type Actions =
  | IReduceSearchBooks
  | ISelectBook
  | IReduceFavoriteBooks
