const fibonacci = function(index) {

    let everyFirstNum = 1;
    let everySecondNum = 1;
    let myFibo = [1,1];
    let result = ""
    
    if (index <0) {
        return "OOPS";
    }
    else {
    // Fibonacci sequence 
    for (let i = 0; i < 10; i++) {
        
        sum = everyFirstNum + everySecondNum;
    
        everyFirstNum = sum + everySecondNum;
    
        everySecondNum = everyFirstNum + sum;
    
        result = [sum, everyFirstNum, everySecondNum];
    
        myFibo = myFibo.concat(result);
    
    };
    
    // FindmyIndex code 
    let myIndex = myFibo[index-1];
    
    return myIndex;
    }
    };
    
   fibonacci();
// Do not edit below this line
module.exports = fibonacci;
