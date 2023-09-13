function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //acrescentar as imagens dinamicamente. Mesma coisa de acrescentar pelo HTML
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) { // vai checar se o resultado do formulário é masculino (0 de primeira opção) ou feminino (1 de segunda opção)
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'criancaHomem.jpg')
            } else if (idade >=12 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemHomem.jpg')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'criançaMulher.jpg')
            } else if (idade >=12 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemMulher.jpg')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        img.style.width = '250px'
        img.style.height = 'auto'
        res.innerHTML = `Detectamos: ${gênero}, com ${idade} anos.`
        res.appendChild(img) //acrescentar elemento
    }   
}

