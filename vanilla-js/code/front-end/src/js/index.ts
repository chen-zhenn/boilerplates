import utils from "./utils/index";
import Category from "./Category";
import CategoryList from "./CategoryList";

const { increment } = utils;
const random = ( min:number, max:number ) => Math.floor( Math.random() * max ) + min;
const itemId = increment.id();
const listId = increment.id();

const catItems:string[] = [ "Metas", "Estudos", "Saúde", "Eventos" ];
const catList = new CategoryList(
    random( listId(), 11 ),
    catItems.map( cat => new Category( random( itemId(), 101 ), cat )));

function getProxyHandler( callback:( op: string | any ) => string ) {
    return {
        get( target: string[], prop: string | any, receiver:any ) {
            console.log( `Ojeto alvo foi acessado com prop => ${prop}` );
            console.log( "Receiver => ", receiver );
            console.log( "Target => ", target );

            return target[ prop ];
        },
        set( target: string[], prop: string | any, value:string, receiver: any ):boolean {
            console.log( `Ojeto alvo foi alterado com prop => ${prop}` );
            console.log( "Receiver => ", receiver );
            console.log( "Target => ", target );

            console.log( callback( prop ));

            return true;
        }
    };
}

const callbackProxy = ( op: string | any ) => `Faça algo, para op => ${op}...`;
const catItemsHandler = getProxyHandler( callbackProxy );
const proxy = new Proxy( catItems, catItemsHandler );

console.log( catList );
proxy.push( "Rotina" );

