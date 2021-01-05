export function dateOptions(object) {

    // ***NOT A COMPONENT***
    // ***RETURNS A LIST OF OPTIONS***

    /*
    After Introduction Questions all responses are passed into this function as an object.  

    Returns an array containing activites
    array1 = low risk activities okay for a first date
    array2 = high risk activities for not first date

    "We wouldn't reccomend to go on a date to a cabin in the woods with somebody you don't know." 

      state = {
        relationshipStatus: "", // if first date only public places (no hikes)
        dateType: "", // remove this?
        budget: 0, // remove this and add option to sort results by price using yelp's $$ scale
        era: "" ** most important 
      }
    */

    let optionsArray = []

    switch(object.state.era) {
        case "1920's":
            optionsArray = [["dance hall", "roller skating" , "movie theatres", "sports", "jazz"],["speakeasy", "bar", "flapper"]]
            break;
        case "1930's":
            optionsArray =  [["movies", "food", "ice cream", "dancing", "swing dancing"], ["driving"]]
            break;
        case "1940's":
            optionsArray =  [["World War 2", "patriotism", "voulenteer", "soup kitchen", "carnival", "fortune teller", "chocolate chip cookie"],[]]
            break;
        case "1950's":
            optionsArray =  [["Local Ice Cream Shop", "Drive-In Movies", "Roller Skating", "Bowling"], ["Tiki Bar", "Elvis"]]
            break;
        case "1960's":
            optionsArray =  [["Drive-In Movies", "County Fair", "Roller Skating", "Swing Dancing", "Watch the sunset", "Local Ice Cream Shop", "Bowling", "Festival", "Outdoor Concert"],[]]
            break;
        case "1970's":
            optionsArray =  [["Roller Skating", "Picnic", "Mall", "Record Store", "Disco", "Lava Lamp"],[]]  
            break;  
        case "1980's":
            optionsArray =  [["Classic Rock",  "Roller Skating"], ["80's bar"]]
            break;
        case "1990's":
            optionsArray =  [["Roller Skate", "Grunge", "Picnic", "Movie Theatre"], ["Nintendo 64"] ]
            break;
        case "2000's":
            optionsArray =  [["Boy Band Concert",  "Sidewalk Chalk", "Bowling", "Thrift Shopping", "Aquarium", "Zoo", "Sunset"], ["Hiking"]]
            break;
        default:
            optionsArray =  ["Error matching Era in dateOptions()"]
            break;
    }

    if (object.state.relationshipStatus === "Not Long"){
        return optionsArray[0]
    } else {
        return optionsArray.flat()
    }
}

