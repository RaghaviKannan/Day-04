//Task 1: Simple Programs todo for variables

//1.Declare four variables without assigning values and print them in console

let a,b,c,d;

console.log(a,b,c,d)

 

//2.How to get value of the variable myvar as output

var myvar= 1;

console.log(myvar)

 

//3.Declare variables to store your first name, last name, marital status, country and age in multiple lines

var firstname="Raghavi";

var lastname="Kannan";

var maritalstatus="Single";

var country="India";

var age="25"

 

//4.Declare variables to store your first name, last name, marital status, country and age in a single line

var firstname="Raghavi"; var lastname="Kannan"; var maritalstatus="Single"; var country="India";var age="25"

 

//5.Declare variables and assign string, boolean, undefined and null data types

var a="John";

var b=true;

var c;

var d=null

 

//Task 2.Simple Programs todo for Operators

//1.Square of a number

var a=5;

console.log(Math.pow(a,2))

 

//2.Swapping 2 numbers

var a=5;

var b=3;

let c=a

a=b

b=c

console.log(a,b)

 

//3.Addition of 3 numbers

var a=25;

var b=10;

var c=7;

console.log(a+b+c)

 

//4.Celsius to Fahrenheit conversion

var celsius=30

var fahrenheit= (celsius*1.8)+32

console.log(fahrenheit)

 

//5.Meter to miles

var meter=10

var miles=meter*0.000621371

console.log(miles)

 

//Task 3.Simple Programs todo for Condition , Looping and Arrays

//1.Write a loop that makes seven calls to console.log to output the following triangle:

var a="#"

var b=""

for (let i=0;i<7;i++){

  b=b+a

  console.log(b)

}

 

//2.Iterate through the string array and print it contents

var strArray= ["<option>Jazz</option>",

      ,"<option>Blues</option>",

      ,"<option>New Age</option>",

      ,"<option>Classical</option>",

      ,"<option>Opera</option>"]

 

for (let i in strArray){

  console.log(strArray[i])

}

 

//Arrays

//1.write a code to count the elements in the array . Don’t use length property

var myarray=[11,22,33,44,55]

var count=0

for (let i in myarray){

  count=count+1

}

console.log(count)

 

//2.Declare an empty array;

var arr=[]

 

//3.Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods=["idly","dosa","chapati","rice","salad","bread","chicken","fish","mutton","biryani"]

//How can you find your fifth favorite food?

console.log(foods[4])

 

//4.Find the length of your foods array

console.log(foods.length)

 

//Function data handling

//1.Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends =["Mari","MaryJane","CaptainAmerica","Munnabai","Jeff","AAK chandran"];

friends[0]=friends[3]

console.log(friends[0])

 

//2.Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

function dataHandling(input){

    for (var i = 0; i <2; i++) {

        console.log(friends[i])    

    }    

}

dataHandling(friends)

 

//3.Find the person is ur friend or not.

function dataHandling(input, name){

    for (var i = 0; i < input.length; i++) {

        if (input[i].includes(name))

        return "Yes"

    }

}

let found = dataHandling(friends,"Jeff");

console.log(found);

   

//4.We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 =["Mari","MaryJane","CaptainAmerica","Munnabai","Jeff","AAK chandran"];

var friends2 =["Gabbar","Rajinikanth","Mass","Spiderman","Jeff","ET"]

let friends=[...friends1,...friends2].sort()

console.log(friends)
