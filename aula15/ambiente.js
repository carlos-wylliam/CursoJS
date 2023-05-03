let num = [5,4,8,7,9]
// console.log(num)
num.sort()

// for(let pos = 0; pos<num.length;pos++){
//    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let posição = num.indexOf(9)
console.log(`O valor 9 está na posição ${posição}`)