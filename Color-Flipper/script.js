let btn = document.getElementsByClassName('btn')[0]
// console.log(btn)
// let color = ["red","blue","green","cyan"]
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let clrname = document.getElementById('name')

btn.addEventListener("click",function() {
    let hexcolor = '#'
    for(let i = 0;i<6;i++){
        hexcolor+=hex[getRandomNumber()]
    }
    console.log(hexcolor)
    document.body.style.backgroundColor = hexcolor
    clrname.textContent = hexcolor
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}
console.log(getRandomNumber())