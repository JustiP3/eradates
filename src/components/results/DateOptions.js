export function dateOptions(object) {
    /*
    After Introduction Questions all responses are passed into this function as an object.  
    */

    switch(object.state.era) {
        case "1920's":
            return ["dance hall", "speakeasy", "bar", "roller skating", "movie theatres", "sports", "jazz", "flapper"]
        case "1930's":
            return ["movies", "food", "ice cream", "driving", "dancing"]
        case "1940's":
            return ["World War 2", "patriotism", "voulenteer", "soup kitchen", "carnival", "fortune teller"]
        case "1950's":
            return ["asdf"]
        case "1960's":
            return ["asdf"]
        case "1970's":
             return ["asdf"]    
        case "1980's":
            return ["asdf"]
        case "1990's":
            return ["asdf"]
        case "2000's":
            return ["asdf"]
        default:
            return ["asdf"]
    }
}

/*
1920 dance halls, speakeasies and bars, skating rings, movie theatres, sports courts 
Also Jazz and flapper culture 
1930 Great Depression - movies, getting something to eat, going for ice cream, driving around, spending time with friends, going to dances, and even "necking." ... Not all dates involved movies, especially if you didn't have the dime.
1940 - WWII activities - patriotism, volunteer together - soup kitchen. carnival, cotton candy, movies, party, fortune teller 
1950
*/