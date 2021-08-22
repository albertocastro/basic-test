const init = (query)=>{
    const numericValue = query.match(/.*([0-9]+)/)[0]
    const intention = query.toLowerCase().replace(numericValue,"").replace(/ /g,"")
    const queryArray = query.split(" ");
    const endUnit = queryArray[queryArray.length-1];
    
    const supportedConversions = {
        kgtolb:2.20462,
        kmtomi:0.621371,
        mitokm:1.60934,
        lbtokg:0.453592
    }
    if(!supportedConversions[intention]) return `Conversion (${intention}) not supported. This is a wendys`;
    return `${query} = ${numericValue*supportedConversions[intention]}${endUnit}`
}

const query = "250lb to Kg"
const result = init(query);
console.log(result)