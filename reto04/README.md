## *Reto 4*: Una caja dentro de otra caja y otra...

<img src="https://adventjs.dev/challenges-2022/4.svg" alt="imagen_reto_4" width="500" height="250">


Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de <strong style="color:yellow">cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.</strong>

Tu tarea es escribir <strong style="color:yellow">una función</strong> que, <strong style="color:yellow">dada una lista de cajas con sus tamaños</strong>, determine si es posible <strong style="color:yellow">empaquetar todas las cajas en una sola de manera que cada caja contenga a otra</strong> (que a su vez contenga a otra, y así sucesivamente).

Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.

Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. <strong style="color:yellow">Los elfos nos han dicho que las cajas no se pueden rotar</strong>, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:

```js
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true
```

En el ejemplo anterior, la caja más pequeña entra en la caja más grande. Por lo tanto, es posible empaquetar todas las cajas en una sola. Ahora veamos un caso que no:

```js
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false
```

En el ejemplo anterior, la caja más pequeña entra en la caja del medio, pero la caja del medio no entra en la caja más grande. Por lo tanto, no es posible empaquetar todas las cajas en una sola.

Ten en cuenta que las cajas pueden no venir en orden:

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

fitsInOneBox(boxes) // true
En el ejemplo anterior, la primer caja cabe en la tercera, y la tercera en la segunda. Por lo tanto, es posible empaquetar todas las cajas en una sola.

Cosas a tener en cuenta:

<ul>
<li><strong style="color:yellow">Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.</strong></li>
<li><strong style="color:yellow">Las cajas pueden venir desordenadas de tamaño.</strong></li>
<li><strong style="color:yellow">Las cajas no son siempre cuadradas, pueden ser rectangulares.</strong></li>
</ul>