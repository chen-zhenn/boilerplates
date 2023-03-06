import Category from "../../../modules/ToDo/Category";
import { ItodoCategory } from "../../../interfaces";


describe( "Categoria", () => {
    let category: ItodoCategory;
    let obj:ItodoCategory;

    beforeAll(() => {
        category = new Category( 1, "estudos" );
    });

    it( "Deve retornar um objeto do tipo 'ItodoCategory'", () => {
        obj = { id: 1, name: "estudos" };

        expect( typeof category ).toBe( "object" );
        expect( category ).toEqual( obj );
    });
});
