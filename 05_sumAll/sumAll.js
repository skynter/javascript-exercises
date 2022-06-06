const sumAll = function(int1,int2) {

    if (int1<0 || int2<0 || typeof(int1)!== "number" || typeof(int2) != "number") {
        return "ERROR";
    }
    
    else if (int1 > int2) {
    
        for (i=(int2+1); i <= int1; i++) {
    
            int2 = int2 + i;
        };
        
        return int2;
    }
    
    else {
    
    for (i=(int1+1); i <= int2; i++) {
    
        int1 = int1 + i;
    };
    }
        return int1;
         };
         
    sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
