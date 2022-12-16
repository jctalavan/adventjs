const path = [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]];

let totalTimeUnits = 0;

const iterator = path.entries();
let posAnterior = 0;

for (const item of iterator) {
  const index = item[0];
  const values = item[1];

  if (index === 0) {
    totalTimeUnits += values[0];
  } else {
    const a = values.at(posAnterior);
    const b = values.at(posAnterior + 1);

    totalTimeUnits += a < b ? a : b;
    posAnterior = a < b ? posAnterior : posAnterior + 1;
  }
}

console.log(totalTimeUnits);

// getOptimalPath(path); // 5
