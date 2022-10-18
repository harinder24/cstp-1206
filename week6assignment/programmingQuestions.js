let student = [
    {
    name: "Daniel",
    email: "daniel@gmail.com",
    marks: [80, 60, 50, 70, 95]
    },
    {
    name: "Mark",
    email: "mark@gmail.com",
    marks: [99, 40, 84, 72, 60]
    },
    {
    name: "Stacy",
    email: "stacy@gmail.com",
    marks: [8, 30, 11, 0, 20]
    },
    {
    name: "Geri",
    email: "geri@gmail.com",
    marks: [100, 99, 95, 85, 99]
    }
    ];

function studentWithHighestMarks(array = []){
    let output = ""
    array.filter((students) => {
        let highestMarks = 0;
        let studenName = "";
        if(students.marks != undefined){
            let sumOfArray = students.marks.reduce((accumulator, currentValue) => {
                return  accumulator + currentValue;
            }, 0)
            if(highestMarks < sumOfArray){
                highestMarks = sumOfArray
                studenName = students.name
                output = `${studenName} has highest total marks of ${highestMarks}`
            }
        }   
    })
    return output
}

console.log(studentWithHighestMarks(student));

// first way

// function missingNumber(array = []) {  // there is no need for n
//     for (let i = 0; i < array.length; i++){
//         if(!array.includes(i)){
//             console.log(i);
//         }
//     }
    
// }

function missingNumber(array = []) {  // there is no need for n
  
    let numberMissing = array.map((number, index) =>{
        if(array.includes(index) == false){
            return index.valueOf()
        }
    })
    return numberMissing.join("")
}
console.log( missingNumber([ 4, 5, 2, 1, 0, 3, 7]));

