
// con la collaborazione di Adrian ;)



class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top - 1];
    }

    clear() {
        this.top = 0;
    }

    length() {
        return this.top;
    }
}





function reverseStack(stack) {
    let reverse = new Stack();
    while(stack.length() > 0) {
        reverse.push(stack.pop());
    }
    return reverse;
}



function findMissingParenthesis(expr) {
    let missingCloseP = new Stack()
    let missingOpenP = new Stack();

    for (let pos = 0; pos < expr.length; ++pos) {
        if (expr[pos] === "(") missingCloseP.push(pos);

        if (expr[pos] === ")") {
            if (missingCloseP.length() === 0) missingOpenP.push(pos);
            else missingCloseP.pop();
        }
    }

    if (missingCloseP.length() > 0) missingCloseP = reverseStack(missingCloseP);

    if (missingOpenP.length() > 0) missingOpenP = reverseStack(missingOpenP);

    let resultString = "";

    if (missingCloseP.length() > 0) {
        resultString += "you forgot to close the parentheses opened in these positions:";
        while (missingCloseP.length() > 0) {
            resultString += ` ${missingCloseP.pop()}`;
        }
    }

    if (missingOpenP.length() > 0) {
        if (resultString.length > 0) resultString += "\n";

        resultString += "you closed parentheses that was never opened in these positions:";
        while (missingOpenP.length() > 0) {
            resultString += ` ${missingOpenP.pop()}`;
        }
    }

    if (resultString.length === 0) resultString += "no missing parentheses found";

    return resultString;
}





// TEST 1

console.log("TEST 1:")
console.log(findMissingParenthesis("2.3 +( 23 / 12 + (3.14159 * 24"), "\n");

// TEST 2

console.log("TEST 2:")
console.log(findMissingParenthesis("2) * (3 + 4) - 2) + 13"), "\n");

// TEST 3

console.log("TEST 3:")
console.log(findMissingParenthesis("1 + 2) * 4) + (3 + 4 - (2 + 13"), "\n");

// TEST 4

console.log("TEST 4:")
console.log(findMissingParenthesis("1 + (3 * (5 - 2) * 2)"));