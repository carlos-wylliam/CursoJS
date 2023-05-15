function contar() {
  let ini = document.getElementById("iinicio")
  let fim = document.getElementById("ifim")
  let pas = document.getElementById("ipasso")
  let res = document.getElementById("res")

  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert("[ERRO] Faltam dados!")
  } else {
    res.innerHTML = "Contando: <br>"
    let iconv = Number(ini.value)
    let fconv = Number(fim.value)
    let pconv = Number(pas.value)
    if(pconv <=0){
      window.alert('Passo invalido! Considerando passo 1')
      pconv = 1 
    }
    if (iconv < fconv) {
      //contagem crescente
      for (let c = iconv; c <= fconv; c += pconv) {
        res.innerHTML += `${c} \u{1F449}`
      }
      res.innerHTML += "\u{1F3C1}"
    } else{
      //contagem regressiva
      for (let c = iconv; c >= fconv; c -= pconv){
            res.innerHTML += `${c} \u{1F449}`
      }
      res.innerHTML += "\u{1F3C1}"
    }
  }
}
