
var przechylki;
var f = "błąd";
var jnop = "jak na odcinku prostym";
var przechylkiG =[
                        [f, jnop, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7], 
/* łuki dla 130 km/h */ [130, 4000, 3500, 2500, 2150, 1800, 1600, 1400, 1250, 1100, 1000, 900],
/* łuki dla 120 km/h */ [120, 3500, 3000, 2000, 1750, 1500, 1350, 1200, 1050, 900, 825, 750],
/* łuki dla 110 km/h */ [110, 2800, 2500, 1800, 1600, 1400, 1200, 1000, 900, 800, 700, 600],
/* łuki dla 100 km/h */ [100, 2200, 2000, 1400, 1200, 1000, 900, 800, 700, 600, 550, 500],
/* łuki dla  90 km/h */ [90, 1600, 1500, 1000, 875, 750, 675, 600, 550, 500, 450, 400],
/* łuki dla  80 km/h */ [80, 1200, 1100, 800, 700, 600, 525, 450, 400, 350, 325, 300],
/* łuki dla  70 km/h */ [70, 1000, 800, 600, 500, 400, 350, 300, 275, 250, 225, 200],
/* łuki dla  60 km/h */ [60, 600, 500, 350, 300, 250, 225, 200, 175, 150, 137.5, 125],
/* łuki dla  50 km/h */ [50, 450, 350, 250, 212.5, 175, 150, 125, 112.5, 100, 90, 80]];

var przechylkiGkraweznik =[
[f, jnop, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6],
[80, 950, 550, 500, 450, 400, 350, 325, 300, 275, 250],
[70, 600, 375, 337.5, 300, 275, 250, 225, 200, 185, 170],
[60, 380, 250, 225, 200, 180, 160, 150, 140, 130, 120],
[50, 220, 150, 135, 120, 110, 100, 90, 80, 75, 70]];

var przechylkiZ = [
[f, jnop, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
[60, 600, 500, 425, 350, 300, 250, 225, 200, 175, 150, 137.5, 125],
[50, 450, 350, 300, 250, 212.5, 175, 150, 125, 112.5, 100, 90, 80],
[40, 250, 220, 185, 150, 125, 100, 87.5, 75, 67.5, 60, 55, 50],
[30, 150, 120, 105, 90, 75, 60, 55, 50, 45, 40, 35, 30]];

var przechylkiZkraweznik = [
[f, jnop, 2, 2.5, 3, 3.5, 4, 4.5, 5],
[60, 380, 250, 225, 200, 180, 160, 150, 140],
[50, 220, 150, 135, 120, 110, 100, 90, 80],
[40, 150, 100, 87.5, 75, 67.5, 60, 55, 50],
[30, 70, 50, 45, 40, 37.5, 35, 32.5, 30]];

function jakaPrzechylka() {
  
var droga = document.getElementById("klasaDrogi");
var klasaDrogi = droga.options[droga.selectedIndex].value;

var predkosc = document.getElementById("predkoscMiarodajna");
var predkoscMiarodajna = predkosc.options[predkosc.selectedIndex].value;

var promien = document.getElementById("promien").value;

var czyKraweznik = document.getElementById("czyKraweznik").checked;

var klasaRobocza;

switch (klasaDrogi) {
  case "A":
    klasaRobocza = "ASGPG";
    break;
  case "S":
    klasaRobocza = "ASGPG";
    break;
  case "GP":
    klasaRobocza = "ASGPG";
    break;
  case "G":
    klasaRobocza = "ASGPG";
    break;  
  case "Z":
    klasaRobocza = "ZLD";
    break; 
  case "L":
    klasaRobocza = "ZLD";
    break;
  case "D":
    klasaRobocza = "ZLD";
}

if (klasaRobocza === "ASGPG") {
  if (czyKraweznik === true) {
    przechylki = przechylkiGkraweznik;  
  }
  else {
    przechylki = przechylkiG;
  }
}
if (klasaRobocza === "ZLD") {
  if (czyKraweznik === true) {
    przechylki = przechylkiZkraweznik;  
  }
  else {
    przechylki = przechylkiZ;
  }
}

var i;
var j;
for (i = 1; przechylki[i][0] > predkoscMiarodajna; i++) {}
for (j = 1; promien <= ((przechylki[i][j] + przechylki[i][j+1])/2); j++) {}

document.getElementById("wynik").innerHTML = "Przechyłka " + przechylki[0][j] + "%";
}




















