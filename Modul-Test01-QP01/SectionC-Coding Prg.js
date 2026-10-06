// Q7.calculate and print the total and average marks for everyi stuedent 

// const students = [
//     { name: "Amit", math: 78, science: 82, english: 90 },
//     { name: "Sneha", math: 88, science: 75, english: 86 },
//     { name: "Ravi", math: 92, science: 90, english: 85 }
// ];
// for (let student of students) {
//     let total = student.math + student.science + student.english;
//     let average = total / 3;

//     console.log(
//         `${student.name} → Total: ${total}, Average: ${average.toFixed(2)}`
//     );
//     // console.log(student.name,"->Total:","Average",average);
// }



// Q8.find and print the oldest and yiongest person from the List. 

// const people = [
//     { name: "Meena", age: 25 },
//     { name: "Rahul", age: 19 },
//     { name: "Simran", age: 30 },
//     { name: "Arjun", age: 22 }
// ];

// let oldest = people[0];
// let youngest = people[0];

// for (let person of people)
// {
//     if (person.age > oldest.age)
//     {
//         oldest = person;
//     }

//     if (person.age < youngest.age)
//     {
//         youngest = person;
//     }
// }

// console.log(`Oldest: ${oldest.name} (${oldest.age})`);
// console.log(`Youngest: ${youngest.name} (${youngest.age})`);


// Q9. sort the employees in descending order of experience 

// const employees=[
//     {name:"A",salary:50,experience:3},
//     {name:"B",salary:60,experience:2},
//     {name:"C",salary:55,experience:4},
//     {name:"D",salary:70,experience:5}
// ];
// employees.sort((a,b) => b.experience-a.experience);
// console.log(employees);


// Q10.Reverse the order of words in the sentance and capitalise the first letter of each word. 
// const str = "how are you";

// const result = str
//     .split(" ")
//     .reverse()
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ");

// console.log(result);


// Q11.print all prime Number from 1 to n (inclusive),each on a new line 

// const n = 8;

// for (let i = 2; i <= n; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(i);
//     }
// }