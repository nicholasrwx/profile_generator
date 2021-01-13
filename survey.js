const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let x = ``;

rl.question("Whats your name? ", (answer) => {
  rl.prompt();
  x += `\n${answer}\n`;
  rl.question("Whats an activity you like doing? ", (answer) => {
    rl.prompt();
    x += `${answer}\n`;
    rl.question("What do you listen to while doing that? ", (answer) => {
      x += `${answer}\n`;
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
        (answer) => {
          x += `${answer}\n`;
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (answer) => {
              x += `${answer}\n`;
              rl.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  x += `${answer}\n`;
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (answer) => {
                      rl.prompt();
                      x += `${answer}\n`;
                      console.log(x);
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});

//output a fully formed paragraph for their online profile.
//then exit
