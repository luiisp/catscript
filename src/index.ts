import { Command } from 'commander';
import Parser from "./core/parser";
import { createGlobalEnv } from "./runtime/environment";
import { evaluate } from "./runtime/interpreter";
import fs from 'fs';
import util from 'util';

const program = new Command();
