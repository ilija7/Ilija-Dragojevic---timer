let interval;
let sec = 00;
let tens = 00;
let mins = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMinutes = document.querySelector('.mins');
let startBtn = document.querySelector('.start-btn');
let stopBtn = document.querySelector('.stop-btn');
let resetBtn = document.querySelector('.reset-btn');


startBtn.addEventListener('click',function(){
    clearInterval(interval);
    interval = setInterval(Started, 10);
})
stopBtn.addEventListener('click',function(){
    clearInterval(interval);
})

resetBtn.addEventListener('click',function(){
    clearInterval(interval);
    tens = '00';
    sec = '00';
    mins = '00';
    getMinutes.innerHTML = mins;
    getSeconds.innerHTML = sec;
    getTens.innerHTML = tens;
})


function Started(){
    tens++;
    if(tens>9){
        getTens.innerHTML = tens;
    }
    if(tens<9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens>99){
        sec++;
        getSeconds.innerHTML = '0' + sec;
        tens=0;
        getTens.innerHTML = '0'+ 0;

    }

    if(sec>59){
        mins++;
     getMinutes.innerHTML = '0' + mins;
        sec=0;
        getSeconds.innerHTML = '0'+0;
    }

    if(sec>9){
        getSeconds.innerHTML = sec;
    }

 if(mins>9){
    getMinutes.innerHTML=mins;
 }
}