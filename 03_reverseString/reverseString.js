const reverseString = function(myString) {
 let finalslice="";
 

let length = myString.length ;

for (i=1 ; i <= length; i++ ) {

let  slici = myString.substr(-i , 1);

finalslice = finalslice + slici;

};

return finalslice;

};

reverseString("h");

// Do not edit below this line
module.exports = reverseString;
