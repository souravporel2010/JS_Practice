//var ar = ['pupa','babu','golla','puti'];
var ar = [
    {
        name: 'golla',
        age:13,
        marks: 55
    },
    {
        name: 'pupa',
        age:30,
        marks: 70
    },
    {
        name: 'puti',
        age:1,
        marks: 10
    },
    {
        name: 'babu',
        age:33,
        marks: 65
    },

];
ar.forEach((t)=> {
    console.log(t.name+ ' - '+t.age)
});

var t= ar.map((t)=> { return t.name+ '- '+ t.age });
console.log(t);