const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version.
yargs.version('1.1.0');

//Create add command.
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Creating remove command.
yargs.command({
    command:'remove',
    describe:"Remove a note",
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

//Creating list command.
yargs.command({
    command:'list',
    describe:'list your notes',
    handler (){
       notes.listNotes()
    }
})

//Creating read command.
yargs.command({
    command:'read',
    describe:"read a note",
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv);

