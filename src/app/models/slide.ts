export class Slide {
    src: string;
    description: string;
    order: string;

    constructor(src: string, description: string, order: string) {
        this.src = src;
        this.description = description;
        this.order = order;
    }
}
