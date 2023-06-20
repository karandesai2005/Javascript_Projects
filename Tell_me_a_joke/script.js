const darkJokes = [
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "Why did the stadium get hot after the game? All of the fans left!",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "Why don't eggs tell jokes? Because they might crack up!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don't skeletons fight each other? They don't have the guts!",
  ];

  //   console.log(randomJokes)
  
  let btn = document.getElementById("button")
  btn.addEventListener("click",joke_fun)
  function joke_fun(){
    let randomJokes = darkJokes[Math.floor(Math.random()*darkJokes.length)]
    let joke = document.getElementsByClassName(' jokes')
    joke[0].innerHTML = randomJokes
    console.log(randomJokes)
}

  