function validar (){
    var inserir_ano = document.getElementById('insert_ano')
    var ano = new Date()
    var ano_correto = ano.getFullYear()
    var mensagem = document.getElementById('msg')
    if(inserir_ano.value.length == 0 || Number(inserir_ano.value) > ano_correto){
        window.alert('[ERROR] Dados inseridos incorretamente, tente novamente')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano_correto - Number(inserir_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','assets/menino.png')
            }else if (idade <21){
                //Jovem
                img.setAttribute('src','assets/rapaz.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','assets/homemadulto.png')
            }else{
                //Idoso
                img.setAttribute('src','assets/velho.png')
            }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'assets/menina.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src', 'assets/moca.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'assets/mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'assets/velha.png')
            }
        }
        mensagem.style.textAlign ='center'
        mensagem.innerHTML = `Detectamos ${genero}, com ${idade} anos`
        mensagem.appendChild(img)
    }


}