#!/usr/bin/env node
import { Command } from 'commander';
import Parser from "./core/parser";
import { createGlobalEnv } from "./runtime/environment";
import { evaluate } from "./runtime/interpreter";
import fs from 'fs';
import * as path from 'path';


const program = new Command();
const supportedExtensions = ['.cat', '.cats'];
const version = '0.1.0';

program
  .version(version)
  .description('CatScript Interpreter')
  .argument('<file>', 'CatScript file to execute')
  .action((file) => {
    const ext = path.extname(file);
    if (!supportedExtensions.includes(ext)) {
      console.error(`Unsupported file extension: ${ext}. Use ${supportedExtensions.join(', ')}`);
      process.exit(1);
    }
    const filePath = path.resolve(process.cwd(), file);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Could not read file: ${file}`);
        process.exit(1);
      }
      const parser = new Parser();
      const env = createGlobalEnv();

      const program = parser.produceAST(data);

      const result = evaluate(program, env);

    });
  });

program.parse(process.argv);