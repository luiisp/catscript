import Environment from "./environment";
import { Stmt } from "../core/ast";
export type ValueType =
	| "null"
	| "number"
	| "boolean"
	| "object"
	| "native-pspsps"
	| "function";

export interface RuntimeVal {
	type: ValueType;
}

export interface NullVal extends RuntimeVal {
	type: "null";
	value: null;
}

export function MK_NULL() {
	return { type: "null", value: null } as NullVal;
}

export interface BooleanVal extends RuntimeVal {
	type: "boolean";
	value: boolean;
}

export function MK_BOOL(b = true) {
	return { type: "boolean", value: b } as BooleanVal;
}


export interface NumberVal extends RuntimeVal {
	type: "number";
	value: number;
}

export function MK_NUMBER(n = 0) {
	return { type: "number", value: n } as NumberVal;
}

export interface ObjectVal extends RuntimeVal {
	type: "object";
	properties: Map<string, RuntimeVal>;
}

export type FunctionCall = (args: RuntimeVal[], env: Environment) => RuntimeVal;

export interface NativepspspsValue extends RuntimeVal {
	type: "native-pspsps";
	call: FunctionCall;
}
export function MK_NATIVE_pspsps(call: FunctionCall) {
	return { type: "native-pspsps", call } as NativepspspsValue;
}

export interface FunctionValue extends RuntimeVal {
	type: "function";
	name: string;
	parameters: string[];
	declarationEnv: Environment;
	body: Stmt[];
}