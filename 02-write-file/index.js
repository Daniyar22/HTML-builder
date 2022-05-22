const fs = require('fs');
const path = require('path');

const {stdin, stdout} = process;

let file = fs.createWriteStream(path.join(__dirname, 'text.txt'))
stdout.write('Enter some text and press the Enter.\n');
stdout.write('The text will be written line by line to the file text.txt\n');
stdout.write('When you have finished typing, enter the exit command or press Ctrl+C\n\n');


stdin.on('data', dat => {
  let text = dat.toString().trim();
  if (text == 'exit') process.exit();
  file.write(text);
  file.write('\n');
  process.on('SIGINT', () => process.exit());
});


process.on('exit', () => {
  file.end('\nRecording completed');
  stdout.write('\nFile completed, recording completed.')
} ); 