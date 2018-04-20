describe("Javascript Allonge", function(){
    
    describe("References types", function(){
        it("Compares arrays", function(){
            expect([2-1, 2, 2+1] === [1,2,3]).toEqual(false); 
            expect([1,2,3] === [1, 2, 3]).toEqual(false);
            expect([1, 2, 3] === [1, 2, 3]).toEqual(false);
            expect([1, 2, 3]).toEqual([1, 2, 3]);
            expect([2-1, 2, 2+1]).toEqual([1, 2, 3]);
        });
    }) 

})