// 1. Write a function to find the sum of the elements inside the array
// 2. Using a function for loop print all even numbers up to n (parameter in function);
// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.
    // For example - "Crayzy" "Yes"

// 4. Write a function to find the factorial of a given number n

// 5. // Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F

// 6. Write a function which prints the star pattern like that for the given value n

// *
// **
// ***
// ****
// *****
// ******
// *******

// 7.

// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *

// 8. Write a function to reverse a string

// q1
console.log("Question 1");
let arr1 = [34, 3, 45, 12, 14, 21, 56, 5];
let total = 0;
for (let i = 0; i < arr1.length; i++){
    total += arr1[i]
}
console.log(total);

// q2
console.log("Question 2");

function evenNumber(n = 0){
    for (let i = 0; i <= n; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
evenNumber(30)

// q3
console.log("Question 3");

function isThereY(y = ""){
    if(y.includes("y") || y.includes("Y")){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
isThereY("Crayzy")

// q4
console.log("Question 4");
let factorial_number = 1
function factorial(n = 0){
    for(let i = n; i >= 1; i--){
        factorial_number = factorial_number * i;    
    }
    console.log(factorial_number);
}
factorial(6)

// q5
console.log("Question 5");
function average(subjectFirst = 0, subjectSecond = 0, subjectThird = 0, subjectFourth = 0){
    const totalMark = subjectFirst + subjectSecond + subjectThird + subjectFourth;
    const averageMark = totalMark / 4
    if (90 <= averageMark) {
        console.log("Grade A");
    }
    else if( 70 <= averageMark) {
        console.log("Grade B");
    }
    else if (50 <= averageMark){
        console.log("Grade C");
    }
    else {
        console.log("Grade F");
    }

}
average(50,50,50,50)

// q6
console.log("Question 6");
let star = ""
function starPattern1(n = 0){
    for(let i = 1; i <= n; i++){
        star += "*"
        console.log(star); 
    }
}
starPattern1(5)

// q7
console.log("Question 7");
let starz = ""
function starPattern2(n = 0){
    for(let i = 1; i <= n; i++){
        starz += "*"
        console.log(starz); 
    }
    for(let i = n-1; i > 0; i--){
        starz = starz.slice(0, -1)
        console.log(starz);
    }
}
starPattern2(5)

// q8
console.log("Question 8");
function reverse(n = ""){
    const arrayOfString = n.split('')
    const reversearrayOfString = arrayOfString.reverse()
    const reverseString = reversearrayOfString.join('')
    console.log(reverseString);
}
reverse("Monday")
