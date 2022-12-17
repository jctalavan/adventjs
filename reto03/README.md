Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. <strong style="color:yellow">Cada regalo está representado por una cadena</strong>. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un <strong style="color:yellow">límite de peso máximo</strong> que puede llevar. El límite de peso máximo de cada reno es <strong style="color:yellow">igual a dos veces el número de letras en su nombre.</strong>

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. <strong style="color:yellow">Las cajas de regalos no se pueden dividir.</strong>

```js
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
```

Cosas a tener en cuenta:

<ul style="color:yellow">
<li><strong>Las cajas de regalos no se pueden dividir.</strong></li>
<li><strong>Los nombres de los regalos y los renos siempre serán mayores que 0.</strong></li>