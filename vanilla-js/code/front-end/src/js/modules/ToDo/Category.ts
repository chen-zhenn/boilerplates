import { ItodoCategory } from "../../interfaces";

export default class Category implements ItodoCategory {
    public id: number;
    public name: string;

    constructor( id: number, name: string ) {
        this.id = id;
        this.name = name;
    }
}
