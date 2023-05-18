'use strict'

import {
    getDogsImage
} from './api/dogAPI.js'

import './router.js'

const listaImagens = await getDogsImage(10)

const criarCards = (imagem) => {
    const card = document.createElement('card-dog')
    card.foto = imagem 

    return card
}

export const carregarCards = () => {
    const container = document.querySelector('.row')
    const cards = listaImagens.message.map(criarCards)

    console.log(container);
    console.log(cards);
    

    container.replaceChildren(...cards)
}