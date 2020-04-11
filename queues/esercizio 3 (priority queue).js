class PriorityQueue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    dequeuePQ() {
        let pos = 0;
        let higherPriority = this.dataStore[0].code;
        for (let i = 1; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].code > higherPriority) {
                pos = i;
                higherPriority = this.dataStore[i].code;
            }
        }
    return this.dataStore.splice(pos, 1)[0];
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

    toStringPatients() {
        let retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (i < this.dataStore.length - 1) retStr += this.dataStore[i].name + " (code: " + this.dataStore[i].code + ")\n";
            else retStr += this.dataStore[i].name + " (code: " + this.dataStore[i].code + ")";
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



class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}





let patients = new PriorityQueue();

let pNamesArr = ["Rino", "Ciro", "Ivo", "Nicola"]
let pCodesArr = [1, 3, 2, 3]

for (let i = 0; i < 4; ++i) {
    patients.enqueue(new Patient(pNamesArr[i], pCodesArr[i]))
}



console.log("PAZIENTI:\n" + patients.toStringPatients() + "\n")

let seen = patients.dequeuePQ();
console.log(`hanno fatto entrare ${seen.name} (code: ${seen.code})`);

seen = patients.dequeuePQ();
console.log(`hanno fatto entrare ${seen.name} (code: ${seen.code})`);

seen = patients.dequeuePQ();
console.log(`hanno fatto entrare ${seen.name} (code: ${seen.code})`);

seen = patients.dequeuePQ();
console.log(`hanno fatto entrare ${seen.name} (code: ${seen.code})`);