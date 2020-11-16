class Node {
    constructor(value) {
        this.data = value   // Armazenamento
        this.left = null    // Lado Esquerdo
        this.right = null   // Lado Direito
    }
}

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null // Raiz da árvore
    }

    // Inserção de um valor na árvore
    insert(value) {
        let node = new Node(value)

        // Inserção do nodo raiz
        if(this.root === null) this.root = node
        // else -> Método para localizar o local correto para inserir o nodo
    }
}