function loveCalculator() {
    const name1 = prompt("What is your name?")
    const name2 = prompt("What is your crush's name?")
    var n = Math.random()
    var n = Math.floor(n * 100)
    alert(`Dear ${name1} and ${name2}, our love calculator is ${n}%`)
}

loveCalculator()