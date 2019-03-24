// Function constructor

var john = {
    name:'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
  
}

Person.prototype.calculateAge = function(){
        console.log(2019-this.yearOfBirth);
    }
Person.prototype.lastName = 'Serbest';

var emre = new Person('Emre', 1994, 'Computer Engineer');
var ilker = new Person('İlker', 1990, 'Biolog');

emre.calculateAge();
ilker.calculateAge();

console.log(emre.lastName);
console.log(ilker.lastName);
