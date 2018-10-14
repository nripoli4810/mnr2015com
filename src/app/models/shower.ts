export class Shower {
    id: string;
    title: string;
    date: string;
    content: string;
    host: string;

    constructor(id: string, title: string, date: string, content: string, host: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.content = content;
        this.host = host;
    }
}
