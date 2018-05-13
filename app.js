
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = { 
		describe : 'title of the note',
		demand : true,
		alias : 't'
	};

var bodyOptions = {
	describe : 'Body of the note',
	alias : 'b'
};

const argv = yargs
.command('add', 'Add a new Note', {
	title : titleOptions,
	body: bodyOptions
})
.command('read', 'Read a Note with a given title', {
	title : titleOptions
})
.command('list', 'Display all the notes')
.command('remove', 'Remove the note', {
	title : titleOptions,
})
.help()
.argv;


var command = process.argv[2];

if(command === 'add'){
 var note = notes.addNote(argv.title, argv.body);
 
	if(typeof note === 'undefined'){
		console.log('Note not created');
	}
	else{

		console.log('Note created successfully');
		console.log('---');
		console.log(`Title : ${note.title}`);
		console.log(`Body : ${note.body}`);
	}
}  
else if(command === 'list'){
	notes.getAll();
}
else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if(note){
		console.log ('Note found');
		console.log('---');
		console.log(`Title -- ${note.title}` );
		console.log(`Body -- ${note.body}`);
	}
	else{
		console.log('Note not found');
	}
	
}
else if(command === 'remove'){
	var noteRemoved = notes.removeNote(argv.title);
	if(noteRemoved){
		console.log('Note removed successfully');
	}
	else
	{
		console.log('Note not removed');
	}
}
else
	console.log('command not recognised')