function currtime() {
    let a = new Date()
    let hour = a.getHours()
    let min = a .getMinutes()
    let sec = a.getSeconds()
    let time = hour+":"+min+":"+sec
    // console.log(time)
    document.getElementsByClassName('clock')[0].innerHTML = time
}
setInterval(currtime,1000)