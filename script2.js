class Grupo {
    constructor (jogadores, precoVida, precoMana, precoComida) {
        this.jogadores = jogadores;
        this.precoVida = precoVida;
        this.precoMana = precoMana;
        this.precoComida = precoComida;
    }
    //getter
    get textPrecoVida() {
        return this.escreveTextoPrecoVida()
    }

    get textPrecoMana() {
        return this.escreveTextoPrecoMana()
    }
    
    get textPrecoComida() {
        return this.escreveTextoPrecoComida()
    }
    
    escreveTextoPrecoVida() {
        return 'O preço de cada poção de vida é ' + this.precoVida + ' moedas de ouro.' //  
    }

    escreveTextoPrecoMana() {
        return 'O preço de cada poção de mana é ' + this.precoMana + ' moedas de ouro.'
    }

    escreveTextoPrecoComida() {
        return 'O preço de cada porção de comida é ' + this.precoComida + ' moedas de ouro.'
    }

}

class Jogador {
    constructor (nome, vocacao, vida, mana, comida, ouro) {
        this.nome = nome;
        this.vocacao = vocacao;
        this.qtdVida = vida;
        this.qtdmana = mana;
        this.qtdComida = comida;
        this.ouro = ouro;
    }
    //getter
    get textVida() {
        return this.escreveTextoVida()
    }

    get textMana() {
        return this.escreveTextoMana()
    }

    get textComida() {
        return this.escreveTextoComida()
    }

    //funcoes
    escreveTextoVida() {
        return 'O(a) ' + this.nome + ' consumiu ' + this.qtdVida + ' poções de vida durante a missão.'
    }

    escreveTextoMana() {
        return 'O(a) ' + this.nome + ' consumiu ' + this.qtdMana + ' poções de mana durante a missão.'
    }

    escreveTextoComida() {
        return 'O(a) ' + this.nome + ' consumiu ' + this.qtdComida + ' porções de comida durante a missão.' 
    }

}
//INTERFACE
const pedro = new Jogador("Grote", "Curandeiro", 10, 20, 15, 600) // cria um novo objeto 'pedro' da classe jogador
const felipe = new Jogador("Kogvs", "Templario", 20, 10, 18, 1000)
const arthur = new Jogador("Otaku", "Arqueiro", 16, 12, 13, 800)

var ptDoMal = [pedro, felipe, arthur]
var tamanhoPt = ptDoMal.length
const comunistas = new Grupo(ptDoMal, 10, 15, 3)

//Esse bloco estar dentro da classe 'Grupo'
function calculaGastoVida() {
    var totalGastoVida = 0

    for (i=0; i < tamanhoPt; i++) {
        totalGastoVida = totalGastoVida + (( comunistas.precoVida ) * ptDoMal[i].qtdVida)
    }
    return totalGastoVida
}

function calculaGastoMana() {
    var totalGastoMana = 0

    for (i=0; i < tamanhoPt; i++) {
        totalGastoMana = totalGastoMana + (( comunistas.precoMana ) * ptDoMal[i].qtdVida)
    }
    return totalGastoMana
}

function calculaGastoComida() {
    var totalGastoComida = 0

    for (i=0; i < tamanhoPt; i++) {
        totalGastoComida = totalGastoComida + (( comunistas.precoComida ) * ptDoMal[i].qtdComida)
    }
    return totalGastoComida
}