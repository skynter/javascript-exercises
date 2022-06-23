     const leapYears = function(myYear, isLeapYear) {

        if (myYear % 100 !== 0) {
        
            if (myYear % 4 === 0) {
                console.log ("is a leap year");
                isLeapYear = true;
            }
            else {
                console.log("is not a leap year");
                isLeapYear = false;
            }
            }
        
        else if (myYear % 100 === 0) {
        
            if (myYear % 100 === 0 && myYear % 400 === 0) {
                console.log ("is a leap year");
                isLeapYear = true;
                }
            else {
                console.log ("is not a leap year");
                isLeapYear = false;
            }
            };
        
            return isLeapYear;
        };
        
        leapYears(700);
// Do not edit below this line
module.exports = leapYears;
