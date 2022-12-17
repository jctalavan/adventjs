let leds = [0, 0, 1, 0, 0]

const timePerIteration = 7
const ledsLength = leds.length
let timeToAllLedsWorking = 0

const isLedStarted = (currentValue) => currentValue === 1;
const checkAllWorking = (leds) => leds.every(isLedStarted)
let allLedsWorking = checkAllWorking(leds)

while(!allLedsWorking){
    let copyLeds = []

    leds.forEach((value, index) => {
        
        //si el led está encendido no hacemos nada
        if(value === 1){
            copyLeds.push(1)
            return
        }

        //el primer led lo comparamos con el estado del último led de la tira
        //el resto de leds con el de su posición anterior
        const indexToCompare = index === 0 ? ledsLength - 1 : index-1
        isLedStarted(leds[indexToCompare]) ? copyLeds.push(1) : copyLeds.push(0)
    })

    allLedsWorking = checkAllWorking(copyLeds)
    timeToAllLedsWorking += timePerIteration
    leds = copyLeds
}

console.log(timeToAllLedsWorking);