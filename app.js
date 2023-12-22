//start1

var age = +prompt("Введите свой возраст");

if(age >=0 && age <=18){
    alert("Вы еще молоды, вам нужно учиться");
}else if(age >=19 && age <=50){
    alert("Вам нужно работать");
}else if(age >=51 && age <=59){
    alert("Вам скоро на пенсию");
}else if(age >=60 && age <=100){
    alert("Вы пенсионер");
}else{
    alert("Что-то не так")
}

//end1

//start2

var time = +prompt("Введите время");
if(time >= 0 && time <= 6){
    alert(time + " Часа ночи")
}else if(time >= 7 && time <= 10){
    alert(time + " Часов утра")
}else if(time >= 11 && time <= 17){
    alert((time %12) + " Часа дня")
}else if(time >= 18 && time <= 23){
    alert((time %12) + " Часов вечера")
}else{
    alert("Что- то не так")
}

//end2

//start3
var x = prompt("Введите первое число");
var y = prompt("Введите второе число");
var z = prompt("Введите третье число");

if( y<x<z || y>x>z){
    alert(x)
}else if( x<y<z || x>y>z){
    alert(y)
}else if( x<z<y || x>z>y){
    alert(z)
}else{
    alert("Что-то не так");
}
//end3
