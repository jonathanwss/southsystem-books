/* eslint-disable prettier/prettier */
export default class Book{
    public description: string;
    public title: string;
    public id: string;

    constructor(description:string, title:string, identification:string){
        this.description = description;
        this.id = identification;
        this.title = title;
    }

    static schema = {
        name: 'Book',
        primaryKey: 'id',
        properties: {
          id: { type: 'string', optional: true },
          title: { type: 'string', optional: true },
          description: { type: 'string', optional: true },
        },
      };
}
