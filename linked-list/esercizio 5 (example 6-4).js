/*
ESERCIZIO 5:

Rewrite your solution to Example 6-4 using a doubly linked list
*/



// ----------------------- DOUBLY LINKED LIST CLASS -----------------------


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







// ---------------------------- TEST ----------------------------


let shoppingList = new DLList();

shoppingList.insert("Milk", "head");
shoppingList.insert("Bread", "Milk");
shoppingList.insert("Eggs", "Bread");
shoppingList.insert("Cookies", "Eggs");
shoppingList.insert("Bacon", "Cookies");



console.log("SHOPPING LIST:");
shoppingList.display();

console.log();     // newline

shoppingList.remove("Bacon");

console.log("UPDATED SHOPPING LIST:")
shoppingList.display();