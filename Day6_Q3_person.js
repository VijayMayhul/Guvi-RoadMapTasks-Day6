/*
Question -3 : Write a Person class to hold all the details
*/

class Person{
    constructor(name, age, gender, courseName, instituteName, batch){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.courseName = courseName;
        this.instituteName = instituteName;
        this.batch = batch;
    }
    getPersonDetails(){
        return `Person's Name is : ${this.name},
Person's Age is : ${this.age},
Person's Gender is : ${this.gender},
Person's Course Name is : ${this.courseName},
Person's Institute Name is : ${this.instituteName},
Person's Batch is : ${this.batch}.`;
    }
}

let obj1 = new Person("S.Vijay", 26, "Male", "Mern Stack Developement", "Guvi", "FSD54WD-T");
console.log(obj1.getPersonDetails());