'use strict'

const routes = {
    '/': '/pages/home.html',
    '/cards': '/pages/cards.html',
    '/result': '/pages/result.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, '', window.event.target.href)

    const path = window.location.pathname

    console.log(path)

    const response = await fetch(routes[path])
    const html = await response.text()
    
    document.getElementById('root').innerHTML = html
}

window.route = route