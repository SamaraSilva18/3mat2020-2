function mesclarVetores(vetEsq, vetDir) {
    let vetRes = [], posEsq = 0, posDir = 0

    while(posEsq < vetEsq.length && postDir < vetDir.length) {
        if(vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else { // vatDir[posDir] < vetEsq[posEsq]
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    // Trazer para o vetRes a sobra do vetor que NÃO chegou ao final
}