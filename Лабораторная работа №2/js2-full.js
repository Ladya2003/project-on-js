function table2() {
    let a=prompt("a=");
    let b=prompt("b=");
    document.write("<table border=\" 2\" cellspacing=\"0\" cellpadding=\"5 \" align=\"center\" style=\"background: rgba(248, 214, 140, 0.63)\">");
    for(let i=1;i<=a;i++){
        document.write("<tr>");
            for(let v=1;v<=b;v++){
                document.write("<td>"+i*v+"</td>");
            }
            document.write("</tr>");
    }
    document.write("</table>");
}

function table3(){
let a=prompt("a=");
a=parseInt(a);
let b=prompt("b=");
b=parseInt(b);

document.write("<table border=\"2\" align=\"center\" style=\"background: rgba(248, 214, 140, 0.63)\">");
        document.write("<tr>");
        document.write("<th>"+"Радиус"+"</th>");
        document.write("<th>"+"Площадь круга"+"</th>");
        document.write("<th>"+"Длина окружности"+"</th>");
        document.write("</tr>");

    
    do {
        document.write("<tr>");
        document.write("<td>"+a.toFixed(1)+"</td>");
        document.write("<td>"+Math.round(Math.PI*Math.pow(a,2))+"</td>");
        document.write("<td>"+Math.round(2*Math.PI*a)+"</td>");
        document.write("</tr>");
        a=a+0.3;
    }
    while(a<b);
        document.write("<tr>");
        document.write("<td>"+b+"</td>");
        document.write("<td>"+Math.round(Math.PI*Math.pow(b,2))+"</td>");
        document.write("<td>"+Math.round(2*Math.PI*b)+"</td>");
        document.write("</tr>"); 
document.write("</table>");
}

function table4(){
        let x=prompt("Первое число=");
        let n1 = new Number(x);
        let y=prompt("Первое число=");
        let n2 = new Number(y);  
        document.write("<table border=\"2\" cellspacing=\"0\" cellpadding=\"5\" align=\"center\" style=\"background: rgba(248, 214, 140, 0.63)\">");
            document.write("<tr>");
            document.write("<th>"+"Число"+"</th>");
            document.write("<th>"+"Метод"+"</th>");
            document.write("<th>"+"Результат"+"</th>");
            document.write("<th>"+"Описание метода"+"</th>");
            document.write("</tr>");

            document.write("<tr>");
            document.write("<td>"+n1+"</td>");
            document.write("<td rowspan=\"2\">"+"to.Exponential(2)"+"</td>");
            document.write("<td>"+n1.toExponential(2)+"</td>");
            document.write("<td rowspan=\"2\">"+"Представляет число в экспоненциальной форме и указывает две цифры после точки."+"</td>");
            document.write("</tr>"); 

            document.write("<tr>");
            document.write("<td>"+n2+"</td>");
            document.write("<td>"+n2.toExponential(2)+"</td>");
            document.write("</tr>");
            
            document.write("<tr>");
            document.write("<td>"+n1+"</td>");
            document.write("<td rowspan=\"2\">"+"to.Fixed(3)"+"</td>");
            document.write("<td>"+n1.toFixed(3)+"</td>");
            document.write("<td rowspan=\"2\">"+"Представляет число в форме с тремя цифрами после точки."+"</td>");
            document.write("</tr>"); 

            document.write("<tr>");
            document.write("<td>"+n2+"</td>");
            document.write("<td>"+n2.toFixed(3)+"</td>");
            document.write("</tr>"); 

            document.write("<tr>");
            document.write("<td>"+n1+"</td>");
            document.write("<td rowspan=\"2\">"+"to.Precision(1)"+"</td>");
            document.write("<td>"+n1.toPrecision(1)+"</td>");
            document.write("<td rowspan=\"2\">"+"Представляет число с одной значащей цифрой."+"</td>");
            document.write("</tr>"); 

            document.write("<tr>");
            document.write("<td>"+n2+"</td>");
            document.write("<td>"+n2.toPrecision(1)+"</td>");
            document.write("</tr>"); 
            
            document.write("<tr>");
            document.write("<td>"+n1+"</td>");
            document.write("<td rowspan=\"2\">"+"to.String(16)"+"</td>");
            document.write("<td>"+n1.toString(16)+"</td>");
            document.write("<td rowspan=\"2\">"+"Строковое представление числа в 16-ричной системе счисления."+"</td>");
            document.write("</tr>"); 

            document.write("<tr>");
            document.write("<td>"+n2+"</td>");
            document.write("<td>"+n2.toString(16)+"</td>");
            document.write("</tr>");
        document.write("</table>");
}