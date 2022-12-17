function distributeGifts(packOfGifts, reindeers) {
  
    // let giftsWeigth = 0
    // packOfGifts.forEach(gift => giftsWeigth += gift.length)
  
    const giftsWeigth = packOfGifts.reduce((acumulator, gift) => acumulator + gift.length, 0);
    
    // let reindeersWeigth = 0
    // reindeers.forEach(reindeer => reindeersWeigth += 2 * reindeer.length)
    
    const reindeersWeigth = reindeers.reduce((acumulator, reindeer) => acumulator + 2 * reindeer.length, 0);
  
    return Math.floor(reindeersWeigth / giftsWeigth)
  }