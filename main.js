function createHourFromSeconds(seconds){
    const data = new Date(seconds*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone:'GMT'
    });
}
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');

let seconds=0;  
let timerLet;
function startTimer(){
    timerLet =setInterval(function(){
       seconds++;
        timer.innerHTML = createHourFromSeconds(seconds);
    },1000)
}

document.addEventListener(`click`, function(e){
    const el = e.target;
    if(el.classList.contains('restart')){
        clearInterval(timerLet);
        timer.innerHTML ='00:00:00';
       seconds =0;
    }
    if(el.classList.contains('start')){
        timer.classList.remove('pause');
        clearInterval(timerLet);
        startTimer();
    }
    if(el.classList.contains('pause')){
        clearInterval(timerLet);
        timer.classList.add('pause');
    }
})