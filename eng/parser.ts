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
    return this.tokens[0].type != TokenType.EOF;
  }
  private eat() {
    const prev = this.tokens.shift() as Token;
    return prev;
  }

  private expect(type: TokenType, err: any) {
    const prev = this.tokens.shift() as Token;
    if (!prev || prev.type != type) {
      console.log("Parser Error:\n",err, prev, "Expected:", type);
      process.exit(1);
    }
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
    return this.parse_additive_expr();
  }

  private parse_additive_expr(): Expr {
    // (... + ...) - ...
    let left = this.parse_multip_expr();
    while (this.at().value == "+" || this.at().value == "-") {
      const operator = this.eat().value;
      const right = this.parse_multip_expr();
      left = {
        kind: "BinaryExpr",
        left,
        right,
        operator,
      } as BinaryExpr;
    }
    return left;
  }



  private parse_multip_expr(): Expr {
    // (... * ...) / ...
    let left = this.parse_primary_expr();
    while (this.at().value == "/" || this.at().value == "*" || this.at().value == "%"){
      const operator = this.eat().value;
      const right = this.parse_primary_expr();
      left = {
        kind: "BinaryExpr",
        left,
        right,
        operator,
      } as BinaryExpr;
    }
    return left;
  }

  private parse_primary_expr(): Expr {
    const tk = this.at().type;
    switch (tk) {
      case TokenType.Identifier:
        return { kind: "Identifier", symbol: this.eat().value } as Identifier;
      case TokenType.Number:
        return {
          kind: "NumericLiteral",
          symbol: parseFloat(this.eat().value),
        } as unknown as NumericLiteral; // float use .. int sup
      case TokenType.OpenParen: {
        this.eat(); // open p
        const value = this.parse_expr();
        this.expect(
          TokenType.CloseParen,
          "Expected close parenthesis after expression."
        ); //  close p
        return value;
      }
      default:
        console.log("Unexpected token", this.at()); // err
        process.exit(1);
      //        return {} as Stmt;
    }
  }
}
