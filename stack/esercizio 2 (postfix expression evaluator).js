/*
ESERCIZIO 2:

A postfix expression evaluator works on arithmetic expressions taking the following form:
op1 op2 operator
Using two stacks—one for the operands and one for the operators—design and
implement a JavaScript function that converts infix expressions to postfix expressions,
and then use the stacks to evaluate the expression
*/



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



// FUNZIONE PER INVERTIRE UNA STACK

function reverseStack(stack) {
    let reverse = new Stack();
    while(stack.length() > 0) {
        reverse.push(stack.pop());
    }
    return reverse;
}



// FUNZIONE PER CONVERTIRE IN POSTFIX

// FUNZIONA SOLO CON NUMERI INTERI DI UNA SOLA CIFRA
// FUNZIONA CON + - * /
// LE PARENTESI NON L'HO CONSIDERATE
// TUTTI I CARATTERI CHE NON SONO +-*/ O NUMERI VENGONO IGNORATI

function infixToPostfix(expr) {
    let opStack = new Stack();
    let numStack = new Stack();
    let postfixExpStack = new Stack();
    let shiftedPlus = false;

    for (char of expr) {
        if (char.match(/[-+\*\/]/g)) {
            opStack.push(char);
        }
        if (char.match(/[0-9]/g)) {
            numStack.push(char);
        }
    }
    
    opStack = reverseStack(opStack);
    numStack = reverseStack(numStack);

    postfixExpStack.push(numStack.pop());

    while (!(opStack.length() === 0 && numStack.length() === 0)) {
        let operator = opStack.pop();

        if (operator.match(/[-+]/g)) {
            if (opStack.length() === 0 || opStack.peek().match(/[-+]/g)) {
                postfixExpStack.push(numStack.pop());
                postfixExpStack.push(operator);
            }
            else {
                postfixExpStack.push(numStack.pop());
                shiftedPlus = true;
            }
        }
        else if (operator.match(/[\*\/]/g)) {
            if (!shiftedPlus) {
                postfixExpStack.push(numStack.pop());
                postfixExpStack.push(operator);
            }
            else {
                if (opStack.length() === 0 || opStack.peek().match(/[-+]/g)) {
                    postfixExpStack.push(numStack.pop());
                    postfixExpStack.push(operator);
                    postfixExpStack.push("+");
                    shiftedPlus = false;
                }
                else {
                    postfixExpStack.push(numStack.pop());
                    postfixExpStack.push(operator);
                }
            }
        }
    }

    postfixExpStack = reverseStack(postfixExpStack);

    let resultString = "";
    while (postfixExpStack.length() > 0) {
        resultString +=  postfixExpStack.length() >= 1 ? postfixExpStack.pop() + " " : postfixExpStack.pop();
    }
    return resultString;
}



// FUNZIONE PER CALCOLARE IL RISULTATO DI UNA ESPRESSIONE POSTFIX

function postfixEvaluate(expr) {
let numStack = new Stack();

    for (char of expr) {
        if (char.match(/[0-9]/g)) {
            numStack.push(char);
        }
        else if (char.match(/[-+\*\/]/g)) {
            let operand2 = numStack.pop();
            let operand1 = numStack.pop();
            let result = ""
            if (char === "+") result = String(Number(operand1) + Number(operand2));
            if (char === "-") result = String(Number(operand1) - Number(operand2));
            if (char === "*") result = String(Number(operand1) * Number(operand2));
            if (char === "/") result = String(Number(operand1) / Number(operand2));
            numStack.push(result);
        }
    }
    return numStack.pop();
}





// TEST

console.log("INFIX:   ", "2 + 3 * 4");
console.log("POSTFIX: ", infixToPostfix("2 + 3 * 4"));
console.log("RESULT:  ", postfixEvaluate(infixToPostfix("2 + 3 * 4")));

console.log();

console.log("INFIX:   ", "1 / 2 + 3 * 4 - 5");
console.log("POSTFIX: ", infixToPostfix("1 / 2 + 3 * 4 - 5"));
console.log("RESULT:  ", postfixEvaluate(infixToPostfix("1 / 2 + 3 * 4 - 5")));