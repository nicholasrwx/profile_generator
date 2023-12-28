const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = ``;
rl.question("What do you think of Node.js? ", (answer) => {
  rl.prompt();
  x += `\n${answer}\n` ;
  rl.question("What do you think of Node.js? ", (answer) => {
    rl.prompt();
    x += `${answer}\n`;
    rl.question("What do you think of Node.js? ", (answer) => {
      
      rl.prompt();
      x += `${answer}\n`;
      console.log(x);
      rl.close();
    });
  });
});
