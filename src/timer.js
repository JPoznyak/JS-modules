// import './howler.js';

// при импорте зависимостей лучше импортировать только необходимые функции/компоненты из библиотек
import {Howl, Howler} from 'howler';

// Setup the new Howl.
const sound = new Howl({
  src: '/sound.mp3'
});


//Объявим переменную
let stopTimer;
let rezult = document.getElementById("rezult");
let startBtn = document.getElementById("start");

//Функция для старта 
export function startTimer(minutes) {
  //для повторного запуска очистим rezult
  document.getElementById("rezult").innerHTML = '';
  //выключим кнопку запуска
startBtn.setAttribute("disabled","");
  //сколько будет длиться обратный отчет

  let time = minutes;
  //определим сколько минут
  let min = parseInt(time / 60);
  if ( min < 1 ) min = 0;
     time = parseInt(time - min * 60);
  if ( min < 10 ) min = '0'+min;
  //определим сколько секунд
  let seconds = time;
  if ( seconds < 10 ) seconds = '0'+seconds;
  //отрисовываем время
  document.getElementById("timeInfo").innerHTML=`Осталось времени: <span>${min}</span> мин <span>${seconds}</span> секунд</span>`;
  //уменьшаем общее время на одну секунду
  minutes--;
  //смотрим время не закончилось
  if ( minutes  >= 0 ) {
             //если нет, то повторяем процедуру заново
    stopTimer  =  setTimeout(function(){startTimer(minutes); }, 1000);
        //если закончилось, то выводим сообщение на экран, и делаем кнопку запуска активной
} else {
  rezult.innerHTML ="Время вышло";
  // Play the sound
  sound.play();

  clearTimeout(stopTimer);
  startBtn.removeAttribute("disabled","disabled");
 }
}

//Функция для остановки обратного отчета
export function stop(){
     //очистим переменную с таймером
     clearTimeout(stopTimer);
   
     //и включим кнопку запуска
     startBtn.removeAttribute("disabled","disabled");
     sound.unload();
     sound.load();
}

startBtn.addEventListener('click', () => {
    let minutes = document.getElementById('timeInput').value;
    if(minutes == "") {
        document.getElementById("timeInfo").innerHTML = "";
        return rezult.innerHTML = "Введите секунды";
    }
    startTimer(minutes);
    document.getElementById('timeInput').value = "";
});

let stopBtn = document.getElementById("stop");
stopBtn.addEventListener('click', () => {
    stop();
});