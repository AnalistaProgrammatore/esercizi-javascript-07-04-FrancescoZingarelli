/*
ESERCIZIO 3:

An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
dispenser is filled with red, yellow, and white colors and you don’t like the yellow
ones. Write a program that uses a stack (and maybe more than one) to remove the
yellow ones without changing the order of the other candies in the dispenser.
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

    // QUESTO L'HO AGGIUNTO IO:

    display() {
        let result = "";
        for (let i = this.top - 1; i >= 0; --i) {
            result += this.dataStore[i] + "\n";
        }
        return result.length > 0 ? result.substring(0, result.length - 1) : null;
    }
}





let pezDispenser = new Stack();

// filling the pez dispenser with 8 random colors
for (let i = 0; i < 8; ++i) {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) pezDispenser.push("red");
    if (randomNumber === 2) pezDispenser.push("yellow");
    if (randomNumber === 3) pezDispenser.push("white");
}



console.log("PRIMA:\n\n" + pezDispenser.display());



let tempStack = new Stack();

while (pezDispenser.length() > 0) {
    let popped = pezDispenser.pop();
    if (popped !== "yellow") tempStack.push(popped)
}
while (tempStack.length() > 0) {
    pezDispenser.push(tempStack.pop());
}



console.log("\nDOPO:\n\n" + pezDispenser.display());