//Šodienas datums new Date
let sodiena = new Date ();
let datums = sodiena.getDate();
let menesis = sodiena.getMonth();
menesis +=1;
let gads = sodiena.getFullYear();


document.write("<p>" + datums + "-" + menesis + "-" + gads + "</p>");




