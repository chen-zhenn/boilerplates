import utils from "../../utils/index";
import Category from "./Category";
import CategoryList from "./CategoryList";

type CatItems = ReadonlySet<string>;

const { increment } = utils;
const random = ( min:number, max:number ) => Math.floor( Math.random() * max ) + min;
const itemId = increment.id();
const listId = increment.id();

const catItems:CatItems = new Set([ "Metas", "Estudos", "Saúde", "Eventos" ]);
const catList = new CategoryList(
    random( listId(), 11 ),
    [ ...catItems ].map( cat => new Category( random( itemId(), 101 ), cat )));

function getProxyHandler( callback:( _op: string | any ) => string ) {
    return {
        get( target: string[], prop: string | any, _receiver:any ) {

            if ( prop === "push" ) {
                // Fazer algo, antes da execução do push...
                console.log( callback( prop ));
            }

            return target[ prop ];
        },
        set( target: string[], prop: string | any, value:string, _receiver: any ):boolean {

            if ( target.length > [ ...catItems ].length ) {
                // Comparar elementos de target em catItems e segue o baile...
                console.log( callback( prop ));
            }

            target[ prop ] = value;
            return true;
        }
    };
}

const callbackProxy = ( op: string | any ) => `Faça algo, para op => ${op}...`;
const catItemsHandler = getProxyHandler( callbackProxy );
const proxy = new Proxy([ ...catItems ], catItemsHandler );
proxy.push( "Rotina" );

export { catList, catItems };

