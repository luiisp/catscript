import Parser from "./eng/parser";
import readline from 'readline';

function repl() {
  const parser = new Parser();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (input) => {
    if (!input || input.includes("exit")) {
      process.exit(0);
    }
    const program = parser.produceAST(input);
    console.log(program);
  });
}

repl();