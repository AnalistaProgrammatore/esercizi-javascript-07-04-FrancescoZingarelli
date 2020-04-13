class DLLNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.previous = null
    }
}



class DLList {
    constructor() {
        this.head = new DLLNode(null)
        this.length = 0
    }
  
    insertAfter(data, compare) {                        // gli puoi dare sia un primitivo che una funzione
        const newNode = new DLLNode(data)
        const current = this.find(compare)
        newNode.next = current.next
        current.next = newNode
        newNode.previous = current
        this.length++
    }
  
    insertFirst(data) {
        const newNode = new DLLNode(data)
        newNode.next = this.head.next
        this.head.next = newNode
        newNode.previous = this.head
        this.length++
    }
  
    insertLast(data) {
        const newNode = new DLLNode(data)
        const last = this.last()
        last.next = newNode
        newNode.previous = last
        this.length++
    }
  
    remove(compare) {                                    // gli puoi dare sia un primitivo che una funzione
        let node = this.find(compare)
        if (node === null) return null
        node.previous.next = node.next
        if (node.next !== null) node.next.previous = node.previous
        return node
    }

    find(compare) {                                      // gli puoi dare sia un primitivo che una funzione
        let currentNode = this.head.next
        if (typeof compare !== "function") {
            while(currentNode !== null && currentNode.data !== compare) {
                currentNode = currentNode.next
            }
        }
        else {
            while(currentNode !== null && !compare(currentNode.data)) {
                currentNode = currentNode.next
            }
        }
        return currentNode
    }

    first() {
        return this.head.next
    }
  
    last() {
        let last = this.head
        while(last.next !== null) {
            last = last.next
        }
        return last
    }
  
    display() {
        let currentNode = this.head.next
        while(currentNode !== null) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }

    displayReverse() {
        let currentNode = this.last()
        while(currentNode.previous !== null) {
            console.log(currentNode.data)
            currentNode = currentNode.previous
        }
    }
}





// TRAVERSE

// (l'ho fatto semplicemente usando i metodi "display" e "displayReverse")

let lista = new DLList();

lista.insertLast("pasta");
lista.insertLast("sale");
lista.insertLast("guanciale");
lista.insertLast("pomodoro");
lista.insertLast("pecorino");

console.log("DISPLAY: \n");
lista.display();

console.log("\nDISPLAY REVERSE: \n");
lista.displayReverse();
