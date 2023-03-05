import Category from "../Category";
import { ItodoCategory } from "../interfaces";


describe( "Módulo de Categorias", () => {
    let category: ItodoCategory | null = null;

    beforeAll(() => {
        category = new Category( 1, "estudos" );
    });

    it( "Deve retornar uma objeto {...}", () => {
        const obj = { id: 1, name: "estudos" };

        expect( typeof category ).toBe( "object" );
        expect( category ).toEqual( obj );
    });
});
