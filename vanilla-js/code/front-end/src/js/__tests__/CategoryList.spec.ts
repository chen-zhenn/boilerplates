import CategoryList from "../CategoryList";
import { ItodoCategory, ItodoCategoryList } from "../interfaces";


describe( "Lista de Categorias", () => {
    let category: ItodoCategory | null = null;
    let list:ItodoCategory[] = [];
    let categoryList: ItodoCategoryList;

    beforeAll(() => {
        category = { id: 1, name: "estudos" };
        list.push( category );
        categoryList = new CategoryList( 1, list );
    });

    it( "Deve retornar um objeto do tipo 'ItodoCategoryList'", () => {
        const obj = { id: 1, categories: list };
        expect( typeof categoryList ).toBe( "object" );
        expect( categoryList ).toEqual( obj );
    });

    it( "Deve conter uma lista de tamanho 1", () => {
        expect( categoryList?.categories.length ).toBe( 1 );
    });

    it( "Deve chamar o método add como esperado", () => {
        const mockAdd = jest.spyOn( categoryList, "add" );
        category = { id: 2, name: "outros" };

        categoryList.add( category );
        expect( mockAdd ).toHaveBeenCalled();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });


    it( "Deve conter uma lista de tamanho 2", () => {
        expect( categoryList?.categories.length ).toBe( 2 );
    });
});
