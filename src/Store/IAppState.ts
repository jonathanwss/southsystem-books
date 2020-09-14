/* eslint-disable prettier/prettier */
import Book from '../Schema/Book';
import { ISearchBooks, IVolume } from './IGoogleApiBooks';

export interface IAppState {
    searchBooks: ISearchBooks,
    selectedBook: IVolume | undefined;
    favoriteBooks: Book[]
}
