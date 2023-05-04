function carregar(){
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var titulo = window.document.querySelector('h1')

    mensagem.innerHTML = `São ${hora} horas.`
    if(hora >= 0 && hora <12){
        //BOM DIA
        
        titulo.style.color = 'black'
        img.src = 'assets/manha.png'
        document.body.style.background = '#ecd5ad'
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'assets/tarde.png'
        document.body.style.background = '#b56627'
    }else{
        //BOA NOITE
        img.src = 'assets/noite.png'
        document.body.style.background = '#1A2331'
    }
}