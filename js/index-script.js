function afficher() {
	var now = new Date();
	var heure   = now.getHours();
	var minute  = now.getMinutes();
	var seconde = now.getSeconds();
				
	if (heure < 10) {
		var preheure = "0";
	} else {
		var preheure = "";
	}
	
	if (minute < 10) {
		var premin = "0";
	} else {
		var premin = "";
	}
	
	if (seconde < 10) {
		var presec = "0";
	} else {
		var presec = "";
	}
 
	document.getElementById('index-heure').innerHTML = "Il est actuellement<br/>"+ preheure + heure + ":" + premin + minute + ":" + presec + seconde + "."
}

function background() {
	var current = new Date();
	var heurebg   = current.getHours();
	switch (heurebg) {
		case 0:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0.8)"
			break;
		case 1:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0.8)"
			break;
		case 2:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0.8)"
			break;
		case 3:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0.8)"
			break;
		case 4:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0.8)"
			break;
		case 5:
			document.getElementById('index-tone').style.backgroundColor = "rgba(175, 175, 175, 0.5)"
			break;
		case 6:
			document.getElementById('index-tone').style.backgroundColor = "rgba(175, 175, 175, 0.5)"
			break;
		case 7:
			document.getElementById('index-tone').style.backgroundColor = "rgba(175, 175, 175, 0.5)"
			break;
		case 8:
			document.getElementById('index-tone').style.backgroundColor = "rgba(175, 175, 175, 0.5)"
			break;
		case 9:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 10:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 11:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 12:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 13:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 14:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 15:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 16:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 17:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 18:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
			break;
		case 19:
			document.getElementById('index-tone').style.backgroundColor = "rgba(187, 119, 17, 0.4)"
			break;
		case 20:
			document.getElementById('index-tone').style.backgroundColor = "rgba(187, 119, 17, 0.4)"
			break;
		case 21:
			document.getElementById('index-tone').style.backgroundColor = "rgba(187, 119, 17, 0.4)"
			break;
		case 22:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0.8)"
			break;
		case 23:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0.8)"
			break;
		default:
			document.getElementById('index-tone').style.backgroundColor = "rgba(0, 0, 0, 0)"
	}
}

// text defil

var position = 0;
var msg = "La version 2 du CV est actuellement en construction, veuillez vous référer à la version 1 pour le moment.";
var msg = "     " + msg;
var long = msg.length;
var fois = (80/msg.length) + 1;
for(i = 0; i <= fois; i++) msg += msg;
function textdefil() {
document.defilform.deftext.value = msg.substring(position,position + 80);
position++;
if(position == long) position=0;
setTimeout("textdefil()",100);
}

window.onload=function() {
	background();
	afficher();
	textdefil();
	setInterval(afficher,1000);
}
