// Problem 10: Find a Character is Vowel or Consonant

var chr="";
function vowelOrConso(chr)
{
 
  console.log("Input a character: " +chr);
 
  if ((chr >= 'a' && chr <= 'z') || (chr >= 'A' &&chr <= 'Z')) 
     {
         if (chr=='a' || chr=='A' || chr=='e' || chr=='E' || chr=='i' || chr=='I' || chr=='o' || chr=='O' || chr== 'u' || chr=='U')
         {
          console.log(" Input is a vowel" +chr);
         }
      else{
          console.log(" Input is a consonant" +chr);
        }
        // if give a input is a number use it else statement
        //else{
        //     console.log("Given Input is not a vowel or consonant " +chr);
        // }
     }
}
