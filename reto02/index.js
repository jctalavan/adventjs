function countHours(year, holidays) {
  
    let totalHorasExtra = 0
  
    for (let holidayDate of holidays)
    {
        const holidayDateParts = holidayDate.split('/')
        const month = Number(holidayDateParts[0]) - 1 //Enero es el 0 en Date
        const day = Number(holidayDateParts[1])
        const date = new Date(year, month, day);
        const dayOfWeek = date.getDay()
        
        if(dayOfWeek !== 6 && dayOfWeek !== 0) // no es ni sábado ni domingo
          totalHorasExtra += 2
    }
    
    return totalHorasExtra
  }