
const repeatString = function(string, num) {

    let storedString = "";

    for ( i = 1; i <= num ; i++) {

        storedString = string + storedString;
    };


    return storedString;

    };
    
  repeatString('',10);


// Do not edit below this line
module.exports = repeatString;
