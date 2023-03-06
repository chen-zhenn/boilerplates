import utils from "./utils/index";
import Category from "./Category";
import CategoryList from "./CategoryList";

const { increment } = utils;
const random = ( min:number, max:number ) => Math.floor( Math.random() * max ) + min;
const itemId = increment.id();
const listId = increment.id();
const catItems = [ "Metas", "Estudos", "Saúde", "Eventos" ];
const catList = new CategoryList(
    random( listId(), 11 ),
    catItems.map( cat => new Category( random( itemId(), 101 ), cat )));

console.log( catList );
