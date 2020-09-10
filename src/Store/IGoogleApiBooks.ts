/* eslint-disable prettier/prettier */
export interface ISearchBooks{
    kind: string;
    totalItems: number;
    items: IVolume[];
}

export interface IVolume{
    king: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: IVolumeInfo;
    saleInfo: ISaleInfo;
    accessInfo: IAccesInfo;
    searchInfo: ISearchInfo;
}

export interface IVolumeInfo{
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: Date;
    description: string;
    industryIdentifiers: IIndustryIdentifiers[];
    readingModes: IReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: IImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface IIndustryIdentifiers{
    type: string;
    identifier: string;
}

export interface IReadingModes{
    text: boolean;
    image: boolean;
}

export interface IImageLinks{
    smallThumbnail: string;
    thumbnail: string;
}

export interface ISaleInfo{
    country: string;
    saleability: string;
    isEbook: boolean;
}

export interface IAccesInfo{
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: IIsAvailable[];
    pdf: IIsAvailable[];
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface IIsAvailable{
    isAvailable: boolean;
}

export interface ISearchInfo{
    textSnippet: string;
}
