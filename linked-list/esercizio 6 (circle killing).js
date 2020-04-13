/*
ESERCIZIO 6:

According to legend, the first-century Jewish historian Flavius Josephus was about
to be captured along with a band of 40 compatriots by Roman soldiers during the
Jewish-Roman War. The Jewish soldiers decided that they preferred suicide to being
captured and devised a plan for their demise. They were to form a circle and kill
every third soldier until they were all dead. Josephus and one other decided they
wanted no part of this and quickly calculated where they needed to place themselves
so they would be the last survivors. Write a program that allows you to place n
people in a circle and specify that every mth person will be killed. The program
should determine the number of the last two people left in the circle. Use a circularly
linked list to solve the problem
*/





// ----------------------- CIRCULARLY LINKED LIST CLASS -----------------------


class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class CLList {
    constructor() {
        this.head = new Node("head");
        this.head.next = this.head;
    }

    insert(newElement, after) {
        let afterNode = this.find(after);
        if (afterNode === null) return null;

        let newNode = new Node(newElement);

        newNode.next = afterNode.next;
        afterNode.next = newNode;
    }

    remove(item) {
        let prevNode = this.findPrevious(item);
        if(prevNode === null) return null;
        prevNode.next = prevNode.next.next;
    }

    display() {
        let currNode = this.head.next;
        while (currNode.element !== "head") {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    }
    /* modificata per la CLL*/



    // HELPER FUNCTIONS

    find(item) {
        let currNode = this.head;
        while (currNode.element !== item && currNode.next !== this.head) {
            currNode = currNode.next;
        }
        if (currNode.element === item) return currNode;
        return null;
    }
    /* modificata per la CLL*/

    findPrevious(item) {
        let currNode = this.head;
        while (currNode.next !== this.head && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        if (currNode.next === this.head) return null;
        return currNode;
    }
    /* modificata per la CLL*/
}





// -------------------------- FUNZIONE "CIRCLEKILLING" --------------------------


function circleKilling(n, m) {
    let list = new CLList();

    for (let i = 1; i <= n; ++i) {
        if (list.head.next === list.head) list.insert(i, "head");
        else list.insert(i, i - 1)
    }

    let curr = list.head.next;

    while(list.head.next !== list.head && list.head.next.next !== list.head && list.head.next.next.next !== list.head) {
        for (let i = 0; i < m - 1; ++i) {
            if (curr.next === list.head) curr = curr.next.next;
            else curr = curr.next;
        }

        list.remove(curr.element)
    }

    return `the last two persons standing are: \n${list.head.next.element} and ${list.head.next.next.element}`
}





// ----------------------------------- TEST -----------------------------------


console.log(circleKilling(6, 3))