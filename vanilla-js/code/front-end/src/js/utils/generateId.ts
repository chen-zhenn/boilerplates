import { IgenerateIds } from "../interfaces";

export default function generateIds(): IgenerateIds {
    let id = 0;
    function set():void {
        id = id + 1;
    }
    function get():number {
        set();
        return id;
    }
    return {
        get
    };
}
