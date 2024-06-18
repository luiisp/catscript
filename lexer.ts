export enum TokenType {
    Number,
    Identifier,
    Equals,
    OpenParen, CloseParen,
    Let,
    BinaryOperator,
}

export interface Token {
    value: string;
    type: TokenType;
}

function token(value: string = '', type: TokenType): Token {
    return { value, type };
}

export function tokenize (sourceCode: string): Token[]{
    const tokens = new Array<Token>();
    const src = sourceCode.split('');

    while (src.length > 0) {
    
        switch (src[0]) {
            case ')':
              tokens.push(token(src.shift(), TokenType.OpenParen));
              break;
            case '(':
              tokens.push(token(src.shift(), TokenType.CloseParen));
              break;
            case '+':// (+, -) 
            case '-':// 
              tokens.push(token(src.shift(), TokenType.BinaryOperator));
              break;
          }
          
    
    };

    return tokens;
}