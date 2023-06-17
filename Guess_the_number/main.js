let comp = Math.floor(Math.random() * 10 + 1)
let chances = 0
console.log(comp)
while(true){
    let user = prompt("enter number between 1 to 10: ")
    if(comp>user){
        alert(`greater than ${user}`)
    }
    else if(comp<user){
        alert(`smaller than ${user}`)
    }
    else{
        alert(`you guessed it right in ${chances} guesses`)
        break;
    }
    chances++
}

