window.addEventListener('DOMContentLoaded', function() {
'use strict';


//Timer

let deadLine = '07.06.2020';

function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date());

    let hours = Math.floor( (t/(1000*60*60)) ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        seconds = Math.floor( (t/1000) % 60 );
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
}

function setClock (id, endTime) {
    let timerEl = document.getElementById(id);
    let hoursEleme = document.querySelector('.hours');
    let minEleme = document.querySelector('.minutes');
    let secEleme = document.querySelector('.seconds');
    
    let timerId = setInterval(updateClock, 1000);

    function updateClock () {
        let x = getTimeRemaining(endTime);

        hoursEleme.textContent = x.hours;
        minEleme.textContent = x.minutes;
        secEleme.textContent = x.seconds;

        for (let i = 0; i <= timerEl.children.length; i++) {
            if(i % 2 == 0) {
                if(timerEl.children[i].textContent.length < 2) {
                    timerEl.children[i].textContent = '0' + timerEl.children[i].textContent;
                }
            }
        }

        if (x.total <= 0) {
            clearTimeout(timerId);
        }
        
    }
    

}

setClock('timer', deadLine);

let hoursEleme = document.querySelector('.hours');
console.log(hoursEleme);
let minEleme = document.querySelector('.minutes');
console.log(minEleme);
let secEleme = document.querySelector('.seconds');
console.log(secEleme);



    
});