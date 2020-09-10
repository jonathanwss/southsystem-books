/* eslint-disable prettier/prettier */

import { ISearchBooks, IVolume } from './IGoogleApiBooks';

export interface IAppState {
    searchBooks: ISearchBooks,
    selectedBook: IVolume | undefined;
}
