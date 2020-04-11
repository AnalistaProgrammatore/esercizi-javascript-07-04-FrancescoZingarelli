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



let filaFuoriSupermercato = new Deque();

filaFuoriSupermercato.enqueue("Mario");
filaFuoriSupermercato.enqueue("Giulia");
filaFuoriSupermercato.enqueue("Pietro")
filaFuoriSupermercato.enqueueFront("Francesca (infermiera, passa avanti)");
filaFuoriSupermercato.enqueue("Rino");

console.log("FILA: \n" + filaFuoriSupermercato.toString())

filaFuoriSupermercato.dequeue();
filaFuoriSupermercato.dequeueEnd();

console.log("\n" + "(Francesca è entrata)" + "\n" + "(Rino ci ha ripensato e se n'è andato)" + "\n")

console.log("FILA: \n" + filaFuoriSupermercato.toString())