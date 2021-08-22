//Create a function to get the result from km to miles.

// let km = 100
// const miles = 0.62
 function fromKmToMiles(km){
    const miles = 0.62
    return km * miles

}
//console.log(fromKmToMiles(10))

// let lbs = 300



function fromLbsToKg(lbs){
    const kg = 0.42
    return lbs * kg

}
//console.log(fromLbsToKg(300));

//"11km to mi"
//"300lbs to kgs"



function init(query){
    //["400lbs", "to", "kgs"]

    let result = query.split(" ")
    //"400lbs"
    let numberAndUnit = result[0]

    let numericPartLength = numberAndUnit.length - 2
    let onlyNumbers = numberAndUnit.substring(0, numericPartLength)
    //parseInt(onlyNumbers
    let valueNumber = parseInt(onlyNumbers)

    // console.log(onlyNumbers)
    // console.log(query.length)
    // console.log(numericPartLength)

   let intention = query.substring(numericPartLength,query.length)
   
    let finalResult = null
    switch(intention) {
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
const convertionFinalResult = init("500lb to kg")
console.log(convertionFinalResult)
//init("100km to mi")
//console.log(init("400lb to kg"))
//"xxU1 to U2"
//100km
//100000000000000000km

