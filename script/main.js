/*references types*/
var arr0 = [2-1, 2, 2+1];
var arr1 = [1, 1+1, 1+1+1];

/*Basic function 

function (x) {               Esta x es argumento
    return (function (y) {   Esta y es argumento 
        return x             Esta x es una expresión referida a una variable. Free variable porque no está definida por los parámetros de esta función. Not bind to this function (not bound). 
    });
};

Cada vez que invoco una función (le paso valores a los parámetros) se crea un nuevo ambiente en el que las valiarbles son igualadas a valores (a los argumentos que le pasamos).
Como si fuera una nueva entrada al diccionario en el que igualo el parámetro a su valor en esa invocación.
*/

/*Pure functions vs Closures
1. Functions containing no free variables.
2. Functions containing one or more free variables.

El ejemplo anterior podría parecer un closure pero no lo es.
La function(y) es una closure pero está contenida dentro de function(x), la cual tiene un a variable bound así que es una pure function.
=> a pure function can contain a closure.
*/
