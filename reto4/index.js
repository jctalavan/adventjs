function fitsInOneBox(boxes) {
  
    boxes.sort((box1, box2) => {
      return box1.l - box2.l
    })
  
    let correct = true
    boxes.forEach((box, index) => 
    {
      //la primera caja no tenemos que compararla con nada...
      if(index === 0){
        return
      }
      
      let boxPrev = boxes[index-1]
      let boxCurrent = box
        
      let evalLength = boxPrev.l < boxCurrent.l
      let evalWidth = boxPrev.w < boxCurrent.w
      let evalHeight = boxPrev.h < boxCurrent.h
  
      correct = correct && evalLength && evalWidth && evalHeight
    })
  
    return correct
  }