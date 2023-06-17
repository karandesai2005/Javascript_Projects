let user = prompt("enter choice between stone ; paper ; scissor")
let game = ["stone", "paper", "scissor"];
let comp = game[Math.floor(Math.random() * game.length)];
const match = (user,cpu)=>{
  if(comp === user)
  {
    return "TIE"
  }
  else if(comp === 'stone' && user == 'paper')
  {
    return "user"
  }
  else if(comp === 'paper' && user == 'scissor')
  {
    return "user"
  }
  else if(comp === 'scissor' && user == 'stone')
  {
    return "user"
  }
  else if(comp === 'paper' && user == 'stone')
  {
    return "comp"
  }
  else if(comp === 'scissor' && user == 'paper')
  {
    return "comp"
  }
  else if(comp === 'stone' && user == 'scissor')
  {
    return "comp"
  }
  
}
result = match(user,comp)

document.write(`COMP CHOSE:${comp}<br>USER CHOSE:${user}<br>The winner is ${result}`)