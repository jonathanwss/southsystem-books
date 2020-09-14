/* eslint-disable prettier/prettier */
import realmConnect from '../Services/RealmService';
import  Book  from '../Schema/Book';

class RealmBook {
  async create(...books: Book[]): Promise<void> {
    const realm = await realmConnect();
    realm.write(() => {
        books.forEach(currentBook => {
        realm.create(Book.schema.name, currentBook, !!realm.objectForPrimaryKey(Book.schema.name, currentBook.identification));
      });
    });
  }

  async deleteAll() {
    const realm = await realmConnect();
    realm.deleteModel(Book.schema.name);
  }

  async all(): Promise<Book[]> {
    const realm = await realmConnect();
    const books = realm.objects<Book>(Book.schema.name);

    if (books) return Array.from(books);
    return [];
  }
}

const realmBook = new RealmBook();
export default realmBook;
