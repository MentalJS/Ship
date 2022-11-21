# Ship
A program Langies
This Coding L
.water = varable file 
.fish = script
.boat = libary
.ship = package



export function tokenize(sourceCode: string): Token[] {
    const tokens = new Array<Token>()
    const scr = sourceCode.split("");

    //build eachtoken till end of file
    while (scr.length > 0) {
		if (src[0] == "(") {
			tokens.push(token(src.shift(), TokenType.OpenParen));
		} else if (src[0] == ")") {
			tokens.push(token(src.shift(), TokenType.CloseParen));
		} // HANDLE BINARY OPERATORS
		else if (src[0] == "+" || src[0] == "-" || src[0] == "*" || src[0] == "/") {
			tokens.push(token(src.shift(), TokenType.BinaryOperator));
        } else if (src[0]== '='){
            tokens.push(token(scr.shift(), TokenType.Equals)) 
        } else {
            //fuck deno
            //build the number of topken
        if (isint(src[0])){
            let num =""
            while (scr.length > 0 && isint(src[0])){
                num += scr.shift()
            }
            tokens.push(token(num,TokenType.Number))
        } else if (isalpha(src[0])){
            let ident ="" // foo or BAR
            while (scr.length > 0 && isalpha(src[0])){
                ident += scr.shift()
            }
            const reserved = KEYWORDS[ident];
            if (reserved == undefined){
                tokens.push(token.(ident, TokenType.Identifier))
            } else{
                tokens.push(token.(ident, reserved))
            }
        } else if (isskipable(src[0])){
            src.shift();// skip current charter
        } else {
            console.error(
                "Unreconized character found in source: ",
                src[0].charCodeAt(0),
                src[0]
            );
            Deno.exit(1);
        }
        }
    }

    return tokens
}