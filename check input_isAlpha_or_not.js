
// 12. Check Whether a Character is an Alphabet or not?

var alphaChar = "3"; 
 console.log("Entered Input is", +alphaChar);

// comparing both the alphabets uppercase and lowrcases,
//if it satisfied condition the input is alphabet otherwise not alphabet.

if((alphaChar>='a' && alphaChar<='z')||(alphaChar>='A' && alphaChar<='Z'))
    {
    console.log("Given input is a Character" +alphaChar);
}
else{
console.log("Given Input is not a character" ,+alphaChar)
}



                      (or )

// dynamicall checking whether given input is alphabet or not
var alphaChar = ""; 
function alphabetOrNot(alphaChar)
{
 console.log("Entered Input is " +alphaChar);

if((alphaChar>='a' && alphaChar<='z')||(alphaChar>='A' && alphaChar<='Z'))
   
 {
    console.log("Given input is a Character" +alphaChar);
}

else{
    console.log("Given Input is not a character" ,+alphaChar)
}
};
