import { ItodoCategory, ItodoCategoryList } from "./interfaces";

export default class CategoryList implements ItodoCategoryList {
    public id: number;
    public categories: ItodoCategory[];

    constructor( id: number, categories: ItodoCategory[]) {
        this.id = id;
        this.categories = categories;
    }

    add( obj:ItodoCategory ): void {
        this.categories.push( obj );
    }
}
