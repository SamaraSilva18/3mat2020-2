/*
    PILHA
    - É uma estrutura de dados do tipo lista linear, mas de acesso restrito
    - Princípio de funcionamento: LIFO (Last In, First Out) - os últimos serão os primeiros
    - Todas as operações são realizadas na parte final da estrutura de armazenamento     
*/

let texto = 'SOCORRAM-ME SUBI NO ÔNIBUS EM MARROCOS'

let pilha = []

for(let i = 0; i < texto.length; i++) {
    //Inserido na pilha: SEMPRE no final, usando push()
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let invertido = ''

while(pilha.length > 0) { //Enquanto a pilha não estiver vazia
    // Retirando da pilha: SEMPRE do final, usando pop()
    invertido += pilha.pop()
}
console.log(invertido)
