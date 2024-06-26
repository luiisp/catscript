import Parser from "./src/core/parser";
import { createGlobalEnv } from "./src/runtime/environment";
import { evaluate } from "./src/runtime/interpreter";
import fs from 'fs';
import util from 'util';

run("./test.cat");

async function run(filename: string) {
    const parser = new Parser();
    const env = createGlobalEnv();

    const readFile = util.promisify(fs.readFile);
	const input = await readFile(filename, 'utf-8');
    const program = parser.produceAST(input);

    const result = evaluate(program, env);
    // console.log(result);
}