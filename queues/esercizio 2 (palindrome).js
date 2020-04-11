class Deque {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    enqueueFront(element) {
        this.dataStore.unshift(element);
    }

    dequeueEnd() {
        return this.dataStore.pop();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        let retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (i < this.dataStore.length - 1) retStr += this.dataStore[i] + "\n";
            else retStr += this.dataStore[i];
        }
        return retStr;
    }

    empty() {
        if (this.dataStore.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    length() {
        return this.dataStore.length;
    }
}



function isPalindrome(word) {
    let deque = new Deque();
    for (let i = 0; i < word.length; ++i) {
        deque.enqueue(word[i]);
    }

    let reverse = "";
    for (let i = 0; i < word.length; ++i) {
        reverse += deque.dequeueEnd();
    }

    if (reverse === word) return true;
    return false;
}



console.log(`querulo: ${isPalindrome("querulo")}`);
console.log(`xanax: ${isPalindrome("xanax")}`);