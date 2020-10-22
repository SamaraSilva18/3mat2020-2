/*
    3 * { 5 - 2 / [3 * 4 + (12 / 5)]}
    8 - { 5 * (3 + 7)}
*/

const Stack = require('./lib/Stack2')

let analisador = new Stack()

let expr = '3 * {​​ 5 - 2 / [3 * 4 + (12 / 5)]}​​ + 5 * (4 - 2'
//let expr = '8 - { 5 * (3 + 7])}'
let info

for(let i = 0; i < expr.length; i++) {
    switch(expr.charAt(i)) {
        case '{':
            analisador.push({tipo: 'CH', pos: i})
            console.log(analisador)
            break;
        case '[':
            analisador.push({tipo: 'CO', pos: i})
            console.log(analisador)
            break;
        case '(':
            analisador.push({tipo: 'PA', pos: i})
            console.log(analisador)
            break;
        case '}':
            info = analisador.pop()
            if(info && info.tipo == 'CH') {      // Se retornou dados
                console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: Chave fechando na posição ${i} mão tem a abertura correspondente`)
            }
            break
        case ']':
            info = analisador.pop()
            if(info && info.tipo == 'CO') {      // Se retornou dados
                console.log(`Colchete aberta na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: Colchete fechando na posição ${i} mão tem a abertura correspondente`)
            }
            break
        case ')':
            info = analisador.pop()
            if(info && info.tipo == 'PA') {      // Se retornou dados
                console.log(`Parêntese aberta na posição ${info.pos} e fechada na posição ${i}`)
            }
            else {
                console.log(`ERRO: Parêntese fechando na posição ${i} mão tem a abertura correspondente`)
            }
            break
    }
}

// Verifica se há restos na pilha
if(analisador.size() > 0) {
    while(analisador.size() > 0) {
        info = analisador.pop()
        switch(info.tipo) {
            case 'PA':
                console.log(`ERRO: Parêntese aberta na posição ${info.pos} não tem fechamento conresspondente`)
                break
            case 'CO':
                console.log(`ERRO: Colchete aberta na posição ${info.pos} não tem fechamento conresspondente`)
                break
            case 'CH':
                console.log(`ERRO: Chave aberta na posição ${info.pos} não tem fechamento conresspondente`)
                break
        }
    }
}