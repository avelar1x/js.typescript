const ePaisagem =  (Largura, Altura) => Largura > Altura

console.log(ePaisagem(1920, 1080))

function num1(x){
    if(typeof x !== "number") return x
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz'
    if (x % 3 === 0) return 'Fizz'
    if (x % 5 === 0) return 'Buzz'
    
    return x
}
for ( let i = 0; i <+ 100; i++){
    console.log(i, num1(i))
}