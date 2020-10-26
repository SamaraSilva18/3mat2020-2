/*
    Estrutura de dados Fila
    Inserções ocorrem no final da estrutura e remoções, no início
    Seu funcionamento pode ser resumido pela sigla em inglês FIFO
    (First In, First Out) = "O primeiro que entra é o primeiro que sai"
*/
module.exports = class Queue {
    constructor() {
        this.data = []      //Armazenamento
    }

    // Inserção na fila (Enfileiramento)
    enqueue(value) {
        this.data.push(value)
    }

    // Remoção da fila (Desenfileiramento)
    dequeue() {
        return this.data.shift()
    }

    // "Olhadinha" no próximo a ser retirado
    peek() {
        return this.data[0]         // Sempre o primeiro elemento
    }

    size() {
        return this.data.length
    }
}