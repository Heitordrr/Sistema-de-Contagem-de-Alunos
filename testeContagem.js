let listaAlunos = ["Ana", "Ane", "Ani", "Ano", "Anu"]


for (let numero = 0; numero < listaAlunos.length; numero++) {
    if(numero == 0) {
        console.log("O numero e zero")
    } else if (numero % 2 == 0) {
        console.log(`O numero ${numero} e PAR`)
    } else if (numero % 2 == 1) {
        console.log(`O numero ${numero} e IMPAR`)
    }
}