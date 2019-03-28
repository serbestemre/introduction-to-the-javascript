
// Object.create;
var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var emre = Object.create(personProto);

emre.name= 'Emre';
emre.yearOfBirth = 1994;
emre.job = 'Student';

var ilker  = Object.create(personProto,{
    name:{value: 'İlker' },
    yearOfBirth:{value:1996},
    job: {value:'designer'}})

console.log(emre);
console.log(ilker);
    