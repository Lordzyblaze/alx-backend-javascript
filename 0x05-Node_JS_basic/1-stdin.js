<<<<<<< HEAD
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
=======
console.log('Welcome to Holberton School, what is your name?');
// await input
process.stdin.resume();
// once input is entered
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name}`);
  // check if input is coming from the terminal
  if (process.stdin.isTTY) {
    process.exit();
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
>>>>>>> 68b649088b65bccfe993b7b0608d85fbeb71d17e
