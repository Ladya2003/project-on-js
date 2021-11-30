function fun11() {
    alert('Вас приветствует программа Владислава Вакуленчика.');
}
function fun12() {
    if (confirm('Хотите стать крутым разработчиком?') == true){
    
        alert('Идите учиться в БГТУ!');
    }
    else {
       alert('You are wasting your time!');
    }
}
function fun13() {
   x = prompt('Введите имя', 'Надежда');
   if (x == null){
   alert('Пожалуйста, введите ваше имя.');
   }
   else {
   alert('Добро пожаловать, '+ x + '!');
   }
}

function fun21(){
    alert(10+5);
}
function fun22(){
    alert('20'+'5');
}
function fun23(){
    alert(30+'5');
}
function fun24(){
    alert('40'+5);
}
function fun25(){
    alert('Результатом сложения строки и числа всегда будет строка.');
}

function fun3(){
        var y = 10;
        var x = 5; 
        var x1 = (35*y-25*x)/x+332;
        var x2 = (8*y/5+5*x/10+3)*6;
        var x3 = x1%x2;
        alert("Значение первого выражения (35*y-25*x)/x+332: " + x1 + "," + 
        " Значение второго выражения (8*y/5+5*x/10+3)*6: " + x2 + "," + " Остаток от деления значения первого выражения на значение второго: " + x3 );
        document.write(x1 + ", " + x2 + ", " + x3);
}

function fun4(){
        var x=prompt("Введите любое число", "45");
        if (x == null){
            alert("Пожалуйста, введите число.");
        }
        else {
        if(((x<20 || x>40) && x!=15) && x%5==0){
            alert("Правильное значение.");
        }
        else {
            alert("Не правильное значение.");
        }
    }
}

function fun51(){
        var x1=prompt("Введите первое число", "15");
        var num1 = parseInt(x1, 10);
        var x2=prompt("Введите второе число", "20");
        var num2 = parseInt(x2, 10);
        if (isNaN(num1 && num2) == false){ //если пользователь ввел строку(например, fhvkjf), то цикл if вернет true
         if(num1>num2){
            alert("Первое число больше второго.");
        }
        else if (num1<num2){
            alert("Первое число меньше второго.");
        }
            else {
                alert("Числа равнозначные.");
            }
        }  
        else { 
            alert("Пожалуйста, введите числа!");
        }
    }
function fun52(){
            alert("Статистика баскетбольного противостояния БГТУ и БГУИР");
            x1=prompt("Сколько 2-очковых забила команда БГТУ?", "10");
            x1 = parseInt(x1, 10);
            x2=prompt("Сколько 3-очковых забила команда БГТУ?", "5");
            x2 = parseInt(x2, 10);
            y1=prompt("Сколько 2-очковых забила команда БГУИР'a?", "9");
            y1 = parseInt(y1, 10);
            y2=prompt("Сколько 3-очковых забила команда БГУИР'a?", "5");
            y2 = parseInt(y2, 10);
            if(isNaN(x1&&x2&&y1&&y1) == false){
            let result1 = x1*2+x2*3;
            let result2 = y1*2+y2*3;
            if(result1>result2){
                alert("Команда БГТУ победила со счетом: " + result1 + ":" + result2 + "!" );
            }
            else if(result1<result2){
                alert("Команда БГУИР'a победила со счетом: " + result2 + ":" + result1 + "!" );
            }
            else{
                alert("Дружеская ничья: " + result2 + ":" + result1 + "!")
            }
        }
        else{
            alert("Введите числа!");
        }
}

function fun6(){
    let date = new Date();
    day = date.getDay();
    switch(day){
        case 1: 
            alert('Сегодня Понедельник-пора в Сочельник!');
            break;
        case 2: 
            alert("Сегодня Вторник!");
            break;
        case 3: 
            alert('Сегодня Среда-день удалого Храбреца!');
            break;
        case 4: 
            alert('Сегодня Четверг!');
            break;
        case 5: 
            alert('Сегодня Пятница-Развратница!');
            break;
        case 6: 
            alert('Сегодня Суббота-а вот и учеба!');
            break;
        case 0: 
            alert('Сегодня Воскресенье-вечное веселье!');
            break;
        default: 
            alert('К сожалению, Неверные данные(');
            break;
    }
}

function fun7()
    {  
    try {
        docuuument.write("Ошибка, вот блин("); //ошибка
    }
    catch(err) {
        alert("Произошла ошибка. " + err);
    } 
    alert("Прогорамма продолжила работу, несмотря на ошибку!")
    } 