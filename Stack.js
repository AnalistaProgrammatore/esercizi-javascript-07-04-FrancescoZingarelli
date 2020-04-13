class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}



class LinkedList {
    constructor() {
        this.head = new Node(null)
        this.length = 0
    }
  
    insertAfter(data, compare) {                        // gli puoi dare sia un primitivo che una funzione
        const newNode = new Node(data)
        const current = this.find(compare)
        newNode.next = current.next
        current.next = newNode
        this.length++
    }
  
    insertFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head.next
        this.head.next = newNode
        this.length++
    }
  
    insertLast(data) {
        const newNode = new Node(data)
        const last = this.last()
        last.next = newNode
        this.length++
    }
  
    remove(compare) {                                    // gli puoi dare sia un primitivo che una funzione
        if(this.length === 0) return null
        const prev = this.findPrev(compare)
        if(prev !== null) {
            let removed = prev.next
            prev.next = prev.next.next
            this.length--
            return removed;
        }
        return null
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
  
    findPrev(compare) {                                  // gli puoi dare sia un primitivo che una funzione
        let currentNode = this.head
        if (typeof compare !== "function") {
            while(currentNode.next !== null && currentNode.next.data !== compare) {
                currentNode = currentNode.next
            }
        }
        else {
            while(currentNode.next !== null && !compare(currentNode.next.data)) {
                currentNode = currentNode.next
            }
        }
        if (currentNode.next === null) return null
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
}



class StackLL {
    constructor() {
        this.store = new LinkedList()
    }
    
    push(data) {
        this.store.insertLast(data)
    }
  
    pop() {
        return this.store.last() === this.store.head ? null : this.store.remove(this.store.last().data).data
    }

    peek() {
        return this.store.last() === this.store.head ? null : this.store.last().data
    }

    clear() {
        this.store = new LinkedList()
    }
    
    length() {
        return this.store.length
    }

    display() {
        let currentNode = this.store.last()
        while(currentNode !== this.store.head) {
            console.log(currentNode.data)
            currentNode = this.store.findPrev(currentNode.data)
        }
    }
}





// TEST

let stack = new StackLL();

stack.push("a");
stack.push("b");
stack.push("c");
stack.push("d");

console.log("DISPLAY:")
stack.display()

console.log(`\nPOP: ${stack.pop()}`)

console.log("\nDISPLAY:")
stack.display()

console.log(`\nPEEK: ${stack.peek()}`)

console.log(`\nLENGTH: ${stack.length()}`)

stack.clear();

console.log(`\n(CLEAR)\n\nDISPLAY:`);
stack.display();
