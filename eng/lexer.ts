export enum TokenType {
    Number,
    Identifier,
    Equals,
    OpenParen, CloseParen,
    Cat, // let equival
    BinaryOperator,
    EOF // end f
}

const KEYWORDS: Record<string, TokenType> = {
    'cat': TokenType.Cat,
};

export interface Token {
    value: string;
    type: TokenType;
}


function token(value: string = '', type: TokenType): Token {
    return { value, type };
}

function isalpha (src: string): boolean {
    return src.toUpperCase() !== src.toLowerCase();
}

function isskippable (src: string): boolean {
    return src === ' ' || src === '\t' || src === '\n' || src === '\r' || src === '\v' || src === '\f'; 
}

function isint (str: string): boolean{
    const c = str.charCodeAt(0);
    const bounds = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
    return (c >= bounds[0] && c <= bounds[1]);
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
            case '+':// (+, -, *, /) 
            case '-':// 
            case '*':// 
            case '%'://
            case '/':// ... binary op
              tokens.push(token(src.shift(), TokenType.BinaryOperator));
              break;
            case '=':
                tokens.push(token(src.shift(), TokenType.Equals));
                break;
            default: // multichar
                if (isint(src[0])) // number
                {
                    let num = "";
                    while (src.length > 0 && isint (src[0])) {
                        num += src.shift();
                    }

                    tokens.push(token(num, TokenType.Number));
                }
                else if (isalpha(src[0])) { // alpha
                    let id = "";
                    while (src.length > 0 && isalpha(src[0])) {
                        id += src.shift();
                    }

                    const reserved = KEYWORDS[id];
                    if (reserved == undefined) {
                        tokens.push(token(id, TokenType.Identifier));
                    } else {
                        tokens.push(token(id, reserved));
                    }
                } else if (isskippable(src[0])) { // escape char
                    src.shift(); 
                }else{
                    console.log("ERROR: unknown token: " + src[0]);
                    process.exit(1);
                }
                
          }
          
    
    };
    tokens.push({value: 'END', type: TokenType.EOF});
    return tokens;
}