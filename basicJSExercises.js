/* ---------------------------
*** #1 Percentage ***

Write a JavaScript function to calculate the percentage (%) of a given number.

Test:
console.log(percentage(2000, 37.12));

Output:
742.4
 --------------------------- */

function percentage(number, percentage) {
  return number*(percentage/100);
}
console.log("Percentage Calculator: ", percentage(200,60));
/* Uncomment the following to check */
  // console.log(percentage(2000, 37.12));
  // console.log(percentage(450, 56.5));
  // console.log(percentage(5230, 34));


/* ---------------------------
*** #2 Area of Triangle ***

Write a JavaScript function to calculate the area of a triangle given the base and height.

Test:
console.log(areaTriangle(5, 20));

Output:
50
 --------------------------- */

 function areaTriangle(base, height) {
   return .5*base*height;
 }
 console.log("Triangle Area Calculator:", (10,25));
 /* Uncomment the following to check */
   // console.log(areaTriangle(2, 7));
   // console.log(areaTriangle(20, 56.5));
   // console.log(areaTriangle(50, 34));


/* ---------------------------
*** #3 Rotate String ***

Rotate a given string in the right direction by periodically removing
one letter from the end of the string and attaching it to the front.

Test:
rotateString("cat");

Output:
cat
tca
atc
cat

HINT: Use substring()
 --------------------------- */

 function rotateString(str) {
   if (str === "") // This is the terminal case that will end the recursion
     return "";

   else
 return rotateString(str.substr(1)) + str.charAt(0);
 }

console.log("Rotate String: " ,rotateString("doggo") );
/* Uncomment the following to check */
  //rotate_string("cat");
  //rotate_string("pseudonym")


/* ---------------------------
*** #4 Hide part of email address ***

Write a JavaScript function to hide email addresses to protect from unauthorized user.

Test:
console.log(protect_email("tom_jenkins@example.com"));

Output:
"tom_j...@example.com"

HINT: Use split() and substring()
 --------------------------- */

function protect_email(email) {

var splitted = email.split('@');
var show = splitted[0].slice(0,splitted[0].length/2)
return(show + '...@' + splitted[1])
}

console.log("Protected email:" , protect_email("nayem.abs@gmail.com"));
/* Uncomment the following to check */
  //console.log(protect_email("harry_potter@gmail.com"));
  //console.log(protect_email("sarah.connor@gmail.com"));


/* ---------------------------
*** #5 Remove First Occurence ***

Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

Test:
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

Output:
"The quick brown fox jumps over lazy dog"

HINT: Use indexOf() and slice()
 --------------------------- */

function remove_first_occurrence(text, searchstring) {
  text = text.replace(searchstring+' ', '');
  return text;
}

console.log(remove_first_occurrence("the quick brown fox jumps over the lazy dog", 'the'));


/* ---------------------------
*** #6 Alphabetical Order ***
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Test:
console.log(alphabetic_order('textbook'));
Output:
bekoottx
HINT: Use join(), split() and sort() functions
 --------------------------- */

function alphabetic_order(word) {
    var arr , splited ,sorted;

      arr = word.split("");
      arr.sort();
      sorted=arr.join("");

  return sorted;
}

console.log("Alphabetic Order:");
/* Uncomment the following to check */
   console.log(alphabetic_order("textbook"));
   console.log(alphabetic_order("webmaster"));
   console.log(alphabetic_order("supercalifragilisticexpialidocious"));


/* ---------------------------
*** #7 Most Frequent Item ***
Write a JavaScript function to find the most frequent item in a given array.
Test:
most_frequent([3, 'c', 'c', 'c', 2, 3, 'c', 3, 'c', 2, 4, 9, 3]);
Output:
c occurs 5 times
 --------------------------- */

function most_frequent(arr) {

var mostFrequent = 1;
var n= 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 n++;
                if (mostFrequent<n)
                {
                  mostFrequent=n;
                  item = arr[i];
                }
         }
         n=0;
       }

  console.log("Most frequently occuring item in arr");
  console.log(item+" ( " +mostFrequent +" times ) ") ;
}

console.log("Most Frequent Item:");
/* Uncomment the following to check */
  most_frequent([3, 'c', 'c', 'c', 2, 3, 'c', 3, 'c', 2, 4, 9, 3]);
  most_frequent([7, 2, 'ax', '9', 9, 'ax', 'ax']);


/* ---------------------------
*** #8 Remove Duplicate Values ***
Write a JavaScript program to find and remove duplicate values in a JavaScript array.
Test:
remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
Output:
[3, 'a', 2, 4, 9]
 --------------------------- */

function remove_duplicates(arr) {
  console.log("Duplicates removed from array");
    var x, len=arr.length, out=[], obj={};

  for (x=0; x<len; x++) {
    obj[arr[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  console.log(out);

   }

console.log("Remove Duplicate Values:");
/* Uncomment the following to check */
   remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
   remove_duplicates([4, 4, 4, 5, 's', 8, 's']);


/* ---------------------------
*** #9 Dash between Even Numbers ***
Write a JavaScript program which accepts a number as input and inserts dashes (-) between two consecutive even numbers.
Test:
dash_in_even(012345684);
Output:
"012-456-8-4"
 --------------------------- */

function dash_in_even(number) {
  console.log("even numbers separated by dashes");
    var num=number;
    var str = num.toString();
    var result = [str[0]];

    for(var x=1; x<str.length; x++)
      {
        if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
         {
          result.push('-', str[x]);
         }
        else
         {
          result.push(str[x]);
         }
      }
    console.log(result.join(''));
}

console.log("Dash between Even Numbers:");
/* Uncomment the following to check */
   dash_in_even(100);
   dash_in_even(1356);
   dash_in_even(246824);
   dash_in_even(1324567824);


/* ---------------------------
*** #10 Guessing Game ***
Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched"
HINT: Use Math.ceil() and Math.random()
 --------------------------- */

function guessing_game(guess) {
  // Get a random integer from 1 to 10 inclusive
  console.log("matched or unmatched?");
    var num;

      num = Math.random() * 100;
      num = Math.ceil(num);
      num = (num % 10) + 1;
      console.log("When guess = " + guess + ", num = " + num);

    if(guess == num)
    {
      console.log("Good Work");
    }

    else
    {
      console.log("Not matched");
    }
}

console.log("Guessing Game:");
/* Uncomment the following to check */
   var guess = prompt('Guess a number between 1 and 10');
   console.log("User guessed: "+ guess);
guessing_game(guess);
