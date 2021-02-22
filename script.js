//
//
//The following code is for declaring the current time
//
//
const currentHourText = document.querySelector('#currentHour');
const currentMinuteText = document.querySelector('#currentMinute');
const currentSecondText = document.querySelector('#currentSecond');


function setCurrentTime(){

    const date = new Date();

    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();




    if (currentHour < 10){

        currentHourText.innerHTML = `0${currentHour}`;

    } else if (currentHour >= 10){

        currentHourText.innerHTML = currentHour;

    }





    if (currentMinute < 10){

        currentMinuteText.innerHTML = `0${currentMinute}`;

    } else if (currentMinute >= 10){

        currentMinuteText.innerHTML = currentMinute;

    }







    if (currentSecond < 10){

        currentSecondText.innerHTML = `0${currentSecond}`;

    } else if (currentSecond >= 10){

        currentSecondText.innerHTML = currentSecond;

    }

}


const repeatSetCurrentTime = setInterval(setCurrentTime, 10);


//
//
//The following code is for the actual alarm
//
//
const setHour = document.querySelector('#alarmHour');
const setMinute = document.querySelector('#alarmMinute');
const setSecond = document.querySelector('#alarmSecond');
const alarm = document.querySelector('#alarmSounds');

function set(){

    const date = new Date();

    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentSecond = date.getSeconds();

    const alarmHour = setHour.value;
    const alarmMinute = setMinute.value;
    const alarmSecond = setSecond.value;

    if(currentHour === parseInt(alarmHour)){

        if(currentMinute === parseInt(alarmMinute)){

            if(currentSecond === parseInt(alarmSecond)){

                alarm.play();

            }

        }

    }

}

function check(){

    setButton.setAttribute('disabled',true);

    setHour.setAttribute('disabled',true);

    setMinute.setAttribute('disabled',true);

    setSecond.setAttribute('disabled',true);

    resetButton.removeAttribute('disabled');

    setInterval(set,1000);

}

const setButton = document.querySelector('#set');

setButton.addEventListener('click', check);



//
//The following code is for the Reset Button
//
const resetButton = document.querySelector('#reset');

function reset(){

    setButton.removeAttribute('disabled');

    setHour.removeAttribute('disabled');

    setMinute.removeAttribute('disabled');

    setSecond.removeAttribute('disabled');

    resetButton.setAttribute('disabled', true);

    alarm.pause();

}

resetButton.addEventListener('click', reset);