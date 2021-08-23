//Create a function to get the result from km to miles.

 function fromKmToMiles(km){
    const miles = 0.62
    return km * miles

}

//Create a function to get the result from lb to kg
function fromLbsToKg(lbs){
    const kg = 0.42
    return lbs * kg

}
//Create a function where we execute one of our previous functions by expecting a request.
function init(query){
    

    let result = query.split(" ")    //We cut the query on the specific info we want/need
    let numberAndUnit = result[0]
    let numericPartLength = numberAndUnit.length - 2
    let onlyNumbers = numberAndUnit.substring(0, numericPartLength)
    
    let valueNumber = parseInt(onlyNumbers)
console.log(onlyNumbers)
   

   let intention = query.substring(numericPartLength,query.length)
   
    let finalResult = null
    switch(intention) {   //We use our query to go by the options/case we have in our switch to see which one works or default.
        case "km to mi":
     finalResult = fromKmToMiles(valueNumber) + "mi"
        break;
        case "lb to kg":
      finalResult = fromLbsToKg(valueNumber) + "kg"
        break;
       default:
        finalResult = "this is a Wendys :("
    }
    return finalResult
}
const convertionFinalResult = init("10lb to kg")
console.log(convertionFinalResult)