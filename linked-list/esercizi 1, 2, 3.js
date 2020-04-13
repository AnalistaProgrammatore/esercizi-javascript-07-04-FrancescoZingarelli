/*
ESERCIZI 1, 2 e 3:

(1) Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list
(2) Implement the back(n) function so that when executed, the current node is moved n spaces backward in the list
(3) Implement the show() function, which displays the data associated with the current node

(li ho fatti tutti e tre insieme (e su una doubly linked list) per semplificare la cosa)

(non sono sicuro che voleva questo, comunque questo è quello che ho fatto io:)
*/



// -------------- DOUBLY LINKED LIST NORMALE --------------

class DLLNode {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DLList {
    constructor() {
        this.head = new DLLNode("head");
    }

    insert(newElement, after) {
        let afterNode = this.find(after);
        if (afterNode === null) return null;

        let newNode = new DLLNode(newElement);

        newNode.next = afterNode.next;
        newNode.previous = afterNode;

        afterNode.next = newNode;
    }

    remove(item) {
        let node = this.find(item);
        if(node === null || node.previous === null) return null;
        node.previous.next = node.next;
        if (node.next !== null) node.next.previous = node.previous;
    }

    display() {
        let currNode = this.head.next;
        while (currNode !== null) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    }

    displayReverse() {
        let currNode = this.findLast()
        while (currNode.previous !== null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }



    // HELPER FUNCTIONS

    find(item) {
        let currNode = this.head;
        while (currNode !== null && currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    findLast() {                              // ATTENZIONE: se la lista è vuota ritornerà la testa
        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }
}





// -------------- DOUBLY LINKED LIST MODIFICATA PER L'ESERCIZIO --------------

class DLListMod extends DLList {
    constructor() {
        super();
        this.curr = this.head;
    }

    show() {
        console.log(this.curr.element);
    }

    advance(n) {
        for (let i = 0; i < n; ++i) {
            if (this.curr.next !== null) this.curr = this.curr.next;
        }
    }

    back(n) {
        for (let i = 0; i < n; ++i) {
            if (this.curr.previous !== null) this.curr = this.curr.previous;
        }
    }

    remove(item) {
        let node = this.find(item);
        if(node === null || node.previous === null) return null;
        if (this.curr ===  node) {
            if (node.next === null) this.curr = node.previous;
            this.curr = node.next;
        }
        node.previous.next = node.next;
        node.next.previous = node.previous;
    }
    /* ho dovuto cambiare il metodo remove per spostare il curr nel caso venga rimosso il nodo curr */
}







// ------------------------------ TEST: ------------------------------

let lista = new DLListMod();

lista.insert(1, "head")
for (let i = 2; i <= 10; ++i) {
    lista.insert(i, i - 1)
}

console.log("LISTA:");
lista.display();

console.log();     // newline

lista.advance(7);
lista.back(3)

console.log("Il nodo curr dopo aver fatto advance(7) e back(3):")
lista.show();