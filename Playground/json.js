// var obj = {
// 	name : 'Ayushi Negi'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);

// console.log(stringObj);


// var personString = '{"name" : "Ashu", "age" : 21, "course" : "B.Tech"}';

// var personObject = JSON.parse(personString);


// console.log(typeof personObject);
// console.log(personObject.name);

const fs = require('fs');

var originalNote = {
	title : 'some title',
	body : 'some body' 
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);


var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(note.title);