# Capítulo 1

### Operador ternario

El ultimo operador lógico es el ternario que opera en tres valores. Es escrito con un signo de interrogación y dos puntos, de esta forma:

```js
console.log(true ? 1 : 2);
// → 1

console.log(false ? 1 : 2);
// → 2
```

Este es llamado el operador condicional (o algunas veces simplemente **operador ternario** ya que solo existe uno de este tipo). El valor a la izquierda del signo de interrogación “decide” cual de los otros dos valores sera retornado. Cuando es verdadero, elige el valor de en medio, y cuando es falso, el valor de la derecha.

# Capítulo 2

### Expresiones y declaraciones

Un fragmento de código que produce un valor se llama _expresión_.

Si una expresión corresponde al fragmento de una oración, **una declaración en JavaScript corresponde a una oración completa**. Un programa es una lista de declaraciones.

### Vinculaciones

Para atrapar y mantener valores, JavaScript proporciona una cosa llamada _vinculación_, o _variable_.

```js
let atrapado = 5 * 5;
```

Después de que una vinculación haya sido definida, su nombre puede usarse como una expresión.

```js
let diez = 10;
console.log(diez * diez);
// → 100
```
