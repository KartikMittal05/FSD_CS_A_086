const student ={
    name: 'John',
    age:20,
    branch: "CS",
    sec:"A",
}
// console.log(student.name);
// console.log(student.age);
// console.log(student.branch);
// console.log(student.sec);

const {name,age,branch,sec}=student;
console.log(name);
console.log(age);
console.log(branch);
console.log(sec);

const emp=["abc",56,10000.50];
const [name1,age1,salary]=emp;
console.log(name1);
console.log(age1);
console.log(salary);


