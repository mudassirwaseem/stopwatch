
var min = 0
var sec = 0
var msec = 0
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
var msecHeading = document.getElementById('msec')
var interval ;


function timer(){
    msec++
    msecHeading.innerHTML = msec
    if(msec >= 100){
        sec++
        msec = 0
        secHeading.innerHTML = sec
        if(sec >=60){
            min++
            sec = 0
            minHeading.innerHTML = min
        }
    }
}

function start(){
var btn = document.getElementById("a")
btn.disabled = true

interval = setInterval(timer,10)
}

function pause(){
    var btn = document.getElementById("a")
btn.disabled = false
clearInterval(interval)
}


function reset(){
    var btn = document.getElementById("a")
btn.disabled = false
    msec = 0
    sec = 0
    min = 0
    msecHeading.innerHTML = msec
    secHeading.innerHTML = sec
    minHeading.innerHTML = min
    pause() 
}








