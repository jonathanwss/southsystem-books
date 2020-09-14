/* eslint-disable prettier/prettier */
export default class Book{
    public description: string;
    public title: string;
    public identification: string;

    constructor(description:string, title:string, identification:string){
        this.description = description;
        this.identification = identification;
        this.title = title;
    }

    static schema = {
        name: 'Book',
        properties: {
          identification: { type: 'string', optional: true },
          title: { type: 'string', optional: true },
          description: { type: 'string', optional: true }
        },
      };
}
