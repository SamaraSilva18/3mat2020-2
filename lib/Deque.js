/*
    Estrutura de dados Deque
    DEQue = Double Ended Queue (Fila de duas pontas)
*/
module.exports = class Deque {
    constructor() {
        this.data = []  // Armazenamento
    }

    insertFront() {     // Inserção no início
        this.data.unshift(value)
    }

    insertRear(value){   // Inserção no final
        this.data.push(value)
    }

    removeFront() {      // Remoção no início
        return this.data.shift()
    }

    removeRear() {       // Remoção no final
        return this.data.pop()
    }

    peekFront() {        // "Olhadinha" no início
        return this.data[0]
    }

    peekRear() {         // "Olhadinha" no final
        return this.data[this.data.length - 1]
    }

    size() {
        return this.data.length
    }
}