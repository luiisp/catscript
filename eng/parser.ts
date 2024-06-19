import {
  Stmt,
  Program,
  Expr,
  BinaryExpr,
  NumericLiteral,
  Identifier,
} from "./ast";
import { tokenize, Token, TokenType } from "./lexer";

export default class Parser {
  private tokens: Token[] = [];
  private not_eof(): boolean {
    return this.tokens[0].type !== TokenType.EOF;
  }
  private eat() {
    const prev = this.tokens.shift() as Token;
    return prev;
  }
  public produceAST(sourceCode: string): Program {
    this.tokens = tokenize(sourceCode);
    const program: Program = {
      kind: "Program",
      body: [],
    };

    while (this.not_eof()) {
      program.body.push(this.parse_stmt());
    }

    return program;
  }
  private at() {
    return this.tokens[0] as Token;
  }
  private parse_stmt(): Stmt {
    return this.parse_expr();
  }
  private parse_expr(): Expr {
    return this.parse_primary_expr();
  }

  private parse_primary_expr(): Expr {
    const tk = this.at().type;
    switch (tk) {
      case TokenType.Identifier:
        return { kind: "Identifier", symbol: this.eat().value } as Identifier;
        case TokenType.Number: 
        return { kind: "NumericLiteral", symbol: parseFloat(this.eat().value) } as NumericLiteral; // float use .. int sup
      default:
        console.log("Unexpected token", this.at()); // err
        process.exit(1);
//        return {} as Stmt;
    }
  }
}
