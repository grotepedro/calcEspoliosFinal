function criarJogador(nome, vocacao, vida, mana, comida, ouro) {
    return {
    nome, //criar um objeto jogador genérico e um criador de jogador
    vocacao,
    recursos: {
        vida,   // precisa ser dinamico (preço n é atributo do jogador)
        mana,    // precisa ser dinamico
        comida,  // precisa ser dinamico
},
    espolios: {
        ouro,  // precisa ser dinamico
      //prata: 80,  // precisa ser dinamico AND não implementado
      //bronze: 65, // precisa ser dinamico AND não implementado
},
    getGastos: function() {
    
        let gastos = ( this.recursos.vida * 10 ) + ( this.recursos.mana * 15 ) + ( this.recursos.comida * 3 )
    
        this.recursos.gastoRecursos = gastos

},
    getLucroIndividual: function() { // 

        let lucroIndividual = this.espolios.ouro - this.recursos.gastoRecursos

        this.lucroIndividual = lucroIndividual

},

    getResultadoIndividual: function() {
        this.getGastos()
        this.getLucroIndividual()

        console.log('O(a) ' + this.vocacao + ' pegou ' + this.espolios.ouro + ' moedas de ouro.')
        console.log('O(a) ' + this.vocacao + ' gastou ' + this.recursos.gastoRecursos + ' moedas de ouro em recursos.')
        console.log('O(a) ' + this.vocacao + ' teve um lucro individual de ' + this.lucroIndividual + ' em moedas de ouro.') 
}  
}
}

let grote = criarJogador("Grote", "Cavaleiro", 20, 10, 15, 1000)

grote.getResultadoIndividual()