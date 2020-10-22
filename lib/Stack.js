module.exports = class Stack {
    constructor() {
        this.data = [] //Armazenamento
    }

    // Inserção
    push(value) {
        this.data.push(value)
    }

    // Remoção
    pop() {
        return this.data.pop()
    }

    // Verificar o último elemento ("Olhadinha")
    peek() {
        return this.data[this.data.length - 1]
    }

    // Retorna o número de elementos da pilha
    size() {
        return this.data.length
    }
}