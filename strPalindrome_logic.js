// 1. Given input String is whether palindrome or not?
// dynamicall allocating value
var strng = "";
function checkPalindrome(strng){

		   console.log('The Entered String "'+strng);
		   
           var actualStr; // needs to stores the lowercase string from given string
			  
			strng = strng.toLowerCase();// given string is converted in to lowercase letters for palindrome checking purpose
			
			actualStr = strng;// storing the given string into new variable after converting string into lowercase
			
			//reverse the entered string
			strng = strng.split(''); //split the entered string 
			strng = strng.reverse(); //reverse the order 
			strng = strng.join(''); //then join the reverse order values

			var revStr = strng; //after join the reverse order strng stored into revStr
			
						
			if(actualStr == revStr) //check both the Original string stored in actualStr
			{
				return 'Palindrome'; // return "Palindrome" if true
			}else{
				return 'Not Palindrome';
			}
              };
		
	(or)
		//basic logic Method-2

var str="level";
var text="";
var next="";

for(var i=0;i<str.length;i++) {
text = str[i];
}
for(var j=str.length;j>=0;j--) {
next = str[j];
}
if(text==next) {
console.log("it is a palindrome");
}else {
console.log("it is not a palindrome");
}
