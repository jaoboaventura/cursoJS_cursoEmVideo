let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

/*
Usando o For aplicado em Arrays

let valores = [0, 1, 7, 4, 2, 9]
valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/*
Usando o For

let valores = [0, 1, 7, 4, 2, 9]
console.log(valores)

for(let pos=0; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/*
let num = [5, 8, 4]
num [3]=6
num.push(7)
num.sort()

console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]} `)
*/