'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
        this.foto = ''
    }

    static get observedAttributes() {
        return ['foto']
    }

    attributeChangedCallback(Attributes, oldValue, newValue) {
        this[Attributes] = newValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card__container')

        const foto = document.createElement('img')
        console.log(foto);
        
        foto.src = this.foto
        foto.alt = 'imagem de cachorro'
        
        card.append(foto)

        return card
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        .card__container {
            height: 250px;
            width: 209px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
        }
        
        .card__container img {
            width: 154px;
            height: 125px;
        }
        `

        return css
    }
}

customElements.define('card-dog', card)