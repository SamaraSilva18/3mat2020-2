const Queue = require('./lib/Queue2.js')

let fila = new Queue()

console.log(fila)

fila.enqueue('Jurandir')
fila.enqueue('Deusdete')
fila.enqueue('Astolfo')
fila.enqueue('Neusevânia')

console.log(fila)

let proximo = fila.dequeue()
console.log('Próximo:', proximo)
console.log(fila)

let primeiro = fila.peek()
console.log('Primeiro:', primeiro)
console.log(fila)

fila.enqueue('Bertoldo')
console.log(fila)

proximo = fila.dequeue()
console.log({proximo})
console.log(fila)