
//datums, vārdiem

let sodienaV = new Date ();
let dienaV = sodiena.getDay();
let datums1 = sodiena.getDate();
let menesisV = sodiena.getMonth();
let gadsV = sodiena.getFullYear();

switch (menesisV) {
case 0:
    menesisV = "janvāris";
    break;
  case 1:
    menesisV = "februāris";
    break;
  case 2:
    menesisV = "marts";
    break;
  case 3:
    menesisV = "aprīlis";
    break;
  case 4:
    menesisV = "maijs";
    break;
  case 5:
    menesisV = "jūnijs";
    break;
  case 6:
    menesisV = "jūlijs";
    break;
  case 7:
    menesisV = "augusts";
    break;
  case 8:
    menesisV = "septembris";
    break;
  case 9:
    menesisV = "oktobris";
    break;
  case 10:
    menesisV = "novembris";
    break;
  case 11:
    menesisV = "decembris";
    break;

}


switch (dienaV) {
  case 1:
    dienaV = "pirmdiena";
    break;
  case 2:
    dienaV = "otrdiena";
    break;
  case 3:
    dienaV = "trešdiena";
    break;
  case 4:
    dienaV = "ceturtdiena";
    break;
  case 5:
    dienaV = "piektdiena";
    break;
  case 6:
    dienaV = "sestdiena";
    break;
  case 0:
    dienaV = "svētdiena";
    break;
}


document.write("<p>" + dienaV + ", " + gadsV + ".gada " + datums1 + "." + menesisV + "</p>");


