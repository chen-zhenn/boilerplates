import utils from "./utils/index.js";

const { generateIds } = utils();
const { get: getId } = generateIds();

console.log( "TypeScript index file..." );
console.log( `Id: ${getId()}` );
console.log( `Id: ${getId()}` );
console.log( `Id: ${getId()}` );
