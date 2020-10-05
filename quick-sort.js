function quickSort(vetor) {
    let inicio = 0
    let fim = vetor.length - 2 // Penúltima posição
    let posPivot = vetor.length - 1 // Última posição
    let posDiv = -1
    for(let i = inicio; i <= fim; i++) {
        if(vetor[i] < vetor[posPivot]) {
            posDiv++
            [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
        }
    }
    posDiv++ // Incremento final para encontrar a posição correta do pivô
    // Troca entre a posição divisória e a posição do vetor
    [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
}

let nums = [7, 3, 0, 8, 6, 2, 4, 9, 1, 5]
quickSort(nums)
console.log(nums)