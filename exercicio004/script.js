function tabuada(){
    let num = document.getElementById('inum') //input-number
    let tabuada = document.getElementById('tabuada') //select
    
    
    if (num.value.length == 0){
        window.alert ('[ERRO] Dados inserido icorretamente tente novamente.')
    }else{
        let num_convert = Number(num.value) //convertendo para number
        let c = 1
        tabuada.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num_convert} x ${c} = ${num_convert*c}`
            tabuada.appendChild(item)
            c++
        }
    }
}