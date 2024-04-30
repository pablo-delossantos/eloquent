/*
Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

#
##
###
####
#####
######
#######

*/

let abc = "abc";
console.log(abc.length);
// 3

//======

for (let triangulo = "#"; triangulo.length <= 7; triangulo = triangulo + "#") {
  console.log(triangulo);
}
