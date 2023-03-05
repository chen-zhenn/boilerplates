import incrementalValue from "../utils/incrementalValue";

describe( "Utils", () => {
    describe( "Incrementador de números", () => {
        let incremental = incrementalValue;

        describe( "Deve incrementar somando 1 a partir de 0", () => {
            const increment = { id: jest.fn( incremental()) };

            it( "Deve retornar 1", () => expect( increment.id()).toBe( 1 ));
            it( "Deve retornar 2", () => expect( increment.id()).toBe( 2 ));
            it( "Deve retornar 3", () => expect( increment.id()).toBe( 3 ));
        });

        describe( "Deve incrementar somando 1 a partir de 13", () => {
            const increment = { id: jest.fn( incremental( 13 )) };

            it( "Deve retornar 14", () => expect( increment.id()).toBe( 14 ));
            it( "Deve retornar 15", () => expect( increment.id()).toBe( 15 ));
            it( "Deve retornar 16", () => expect( increment.id()).toBe( 16 ));
        });

    });
});
