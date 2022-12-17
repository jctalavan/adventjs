const path = [[0], [3, 4], [9, 8, 1]];

const pathDepth = path.length;
let newPath = []

path.forEach((valuesOriginal, indexOriginal) => {
  const newLevel = []
  if(indexOriginal === 0){
    newLevel.push(...valuesOriginal)
  }
  else if (indexOriginal === 1){
    const valuesOriginalPrev = path[0]
    newLevel.push(valuesOriginalPrev[0] + valuesOriginal[0])
    newLevel.push(valuesOriginalPrev[0] + valuesOriginal[1])
  }
  else{
    const prevLevel = indexOriginal - 1
    const prevLevelCountItems = newPath[prevLevel].length
    
    valuesOriginal.forEach((valueLevel, indexLevel) => {
      let newValue = 0
      if(indexLevel === 0){
        newValue = valueLevel + newPath[prevLevel][0]
      }
      else if (indexLevel === prevLevelCountItems){
        newValue = valueLevel + newPath[prevLevel][prevLevelCountItems - 1]
      }
      else{
        const possibleA = valueLevel + newPath[prevLevel][indexLevel]
        const possibleB = valueLevel +newPath[prevLevel][indexLevel - 1]
        newValue = Math.min(possibleA, possibleB)
      }
      
      newLevel.push(newValue)
    })
  }

  newPath.push(newLevel)
})

const newPathDepth = newPath.length
const valuesToGetMin = newPath[newPathDepth - 1]

totalTimeUnits = Math.min(...valuesToGetMin)

console.log(totalTimeUnits);

// getOptimalPath(path); // 5
