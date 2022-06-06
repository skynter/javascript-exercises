const removeFromArray = function(myArray,myArray2) {

    let removed = myArray.splice(2,1);
    let removed2 = myArray.splice(1,2)

    return myArray;
    
    };
    
    removeFromArray([1,2,3,4],3);


// Do not edit below this line
module.exports = removeFromArray;
