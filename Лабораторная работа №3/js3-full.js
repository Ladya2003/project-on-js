function arr1(){
    let arr1 = new Array(6*Math.pow(Math.PI, 2)+3*Math.exp(8), 2*Math.cos(4)+Math.cos(12)+8*Math.exp(3), 
    3*Math.sin(9)+Math.log(5)+Math.sqrt(3), 2*Math.tan(5)+6*Math.PI+Math.sqrt(12));
    let min = arr1[0];
    let max = min;
    let k=0, n=0;
        for (let i = 1; i < arr1.length; i++) {
              if (arr1[i] > max){ max = arr1[i], k=i;}
              if (arr1[i] < min){ min = arr1[i], n=i;}
        }
        alert("Исходный массив: " + arr1 + "." + "\nМаксимальный элемент массива: " + max + ", его номер " + k + ". " + "\nМинимальный элемент массива: " + min + ", его номер " + n + ".");
    }
    function arr2(){
        let arr2 = new Array("pow", "pop", "push", "shift", "round", "floor", "slice", "sort");
        let arr2_methods1 = arr2.slice(1,4);        //pop,push,shift
        let arr2_methods2 = arr2.slice(6,8);        //slice,sort
        let array_methods = arr2_methods1.concat(arr2_methods2); //pop,push,shift,slise,sort

        let math_methods1 = arr2.slice(0,1);        //pow
        let math_methods2 = arr2.slice(4,6);        //round,floor
        let math_methods = math_methods1.concat(math_methods2); //pow,round,floor

        let word_concat = [("concat")];
        array_methods = word_concat.concat(array_methods);  // concat,pop,push,shift,slise,sort
        math_methods = math_methods.concat("exp");          //pow,round,floor,epx
        alert("Исходный массив: " + arr2 + "." + "\nМассив методов объекта Array: " + array_methods + "; его длина " + array_methods.length + " элементов." + "\nМассив методов объекта Math: " + math_methods + "; его длина " + math_methods.length + " элементa.");
    }
    function arr3(){
        let full_name = new String("Вакуленчик Владислав Сергеевич");
        let full_name_upper_case=full_name.toUpperCase();
        let full_name_lower_case=full_name.toLowerCase();
        let full_name_both_case=full_name_lower_case.concat(full_name_upper_case);
        let name = full_name.replace("Вакуленчик Владислав Сергеевич", "ВВС");
        alert("Исходная строка: " + full_name + ", ее длина " + full_name.length + " символов." + "\nИсходная строка в верхнем регистре: " + full_name_upper_case + "\nИсходная строка в нижнем регистре: " + full_name_lower_case+ "\nСовмещение этих строк: " + full_name_both_case+"\nМое ФИО: "+name);
    }
    function table(){
        let date = new Date();
        let year = date.getFullYear();
        let mounth = date.getMonth();
        let day = date.getDate();
        let hour = date.getHours();
        let minuts = date.getMinutes();
        let seconds = date.getSeconds();
        document.write("<table border=\"2\" cellspacing=\"0\" cellpadding=\"5\" align=\"center\" style=\"background: rgba(248, 214, 140, 0.63)\">");
            document.write("<tr>" + "<td>" + "Год" + "</td>" + "<td>" + year + "</td>" + "</tr>");
            document.write("<tr>" + "<td>" + "Месяц" + "</td>" + "<td>" + mounth + "</td>" + "</tr>");
            document.write("<tr>" + "<td>" + "День" + "</td>" + "<td>" + day + "</td>" + "</tr>");
            document.write("<tr>" + "<td>" + "Час" + "</td>" + "<td>" + hour + "</td>" + "</tr>");
            document.write("<tr>" + "<td>" + "Минуты" + "</td>" + "<td>" + minuts + "</td>" + "</tr>");
            document.write("<tr>" + "<td>" + "Секунды" + "</td>" + "<td>" + seconds + "</td>" + "</tr>");
        document.write("</table>");
    }