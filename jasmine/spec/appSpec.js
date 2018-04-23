describe("Javascript Allonge", function(){
    
    describe("References types", function(){
        it("Compares arrays", function(){
            expect([2-1, 2, 2+1] === [1,2,3]).toEqual(false); //Es false porque trato de comparar referencias diferentes
            expect([1,2,3] === [1, 2, 3]).toEqual(false);
            expect([1, 2, 3] === [1, 2, 3]).toEqual(false);
            expect([1, 2, 3]).toEqual([1, 2, 3]); //son iguales porque su contenido es el mismo
            expect([2-1, 2, 2+1]).toEqual([1, 2, 3]);
        });

        it("Compares functions", function() {
            expect((function(){}) === (function(){})).toEqual(false);
        })

        it("Undefined expressions", function() {
            expect((function(){})() === (function(){})()).toEqual(true); //Estoy comparando undefined con undefined porque éste es un valor y como tal puede ser comparado.
            expect(undefined === undefined).toEqual(true); //Undefined: the absences of value, but also its own type of value. Every undefined is identical to every other undefined != null.
            expect(void 0 === undefined).toEqual(true);
            expect(void (2 + 2) === undefined).toEqual(true);
            //Qué necesidad tengo de generar un undefined? Caso de uso para void.
        })

        it("")
    })  

}) 