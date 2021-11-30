"use strict"
window.onload = function(){
    window.setInterval(function(){
    let now = new Date();
    let clock = document.getElementById("clock");
    let day = now.getDay();
    let day2 = now.getDate();
    let month = now.getMonth() + 1;
    switch(day){
        case 1: 
        clock.innerHTML = now.toLocaleTimeString() + ', пн. ' + day2 + '.' + month;
            break;
        case 2: 
        clock.innerHTML = now.toLocaleTimeString() + ', вт. ' + day2 + '.' + month;
            break;
        case 3: 
        clock.innerHTML = now.toLocaleTimeString() + ', ср. ' + day2 + '.' + month;
            break;
        case 4: 
        clock.innerHTML = now.toLocaleTimeString() + ', чт. ' + day2 + '.' + month;
            break;
        case 5: 
        clock.innerHTML = now.toLocaleTimeString() + ', пт. ' + day2 + '.' + month;
            break;
        case 6: 
        clock.innerHTML = now.toLocaleTimeString() + ', сб. ' + day2 + '.' + month;
            break;
        case 0: 
        clock.innerHTML = now.toLocaleTimeString() + ', вс. ' + day2 + '.' + month;
            break;
        default: 
            alert('К сожалению, Неверные данные(');
            break;
    }
}, 0);
};
