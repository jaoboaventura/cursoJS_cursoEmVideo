function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.src = 'Manhã.png'
        document.body.style.background = '#DEB887'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'Tarde.png'
        document.body.style.background = '#1E90FF'
    } else {
        img.src = 'Noite.png'
        document.body.style.background = '#515154'
    }
}



