
const fs = require('fs');

var fetchNotes = () => {

	try{
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
		return notes;
	}	
	catch(e){
		console.log('error reported');
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = [];
	var note = {
	title,
	body 
	}

	notes = fetchNotes();

	const isDuplicateNote = notes.some(function(note){
		if(note.title === title){
			return true;
		}
	});

	if(!isDuplicateNote){
		notes.push(note);
		saveNotes(notes);
		return note; 
	}
	else
	{
		console.log('Duplicate Title error');
	}
	
};




var getAll = () => {
	var notes = fetchNotes();
	for(var i = 0; i < notes.length; i++){
		var note = notes[i];
		console.log(`----Note ${i+1}---`);
		console.log(`Title : ${note.title}`);
		console.log(`Body : ${note.body}`);
	}

};

var getNote = (title) => {
	var notes = fetchNotes();
	var foundNote = notes.find((note) => {
		return note.title === title;
	});

	return foundNote;
}

var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) =>  {
		return note.title !== title ;
	});
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
};

module.exports = {
	addNote,
	getAll,
	removeNote,
	getNote

};