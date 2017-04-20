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
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/00.png)"
			break;
		case 1:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/01.png)"
			break;
		case 2:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/02.png)"
			break;
		case 3:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/03.png)"
			break;
		case 4:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/04.png)"
			break;
		case 5:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/05.png)"
			break;
		case 6:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/06.png)"
			break;
		case 7:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/07.png)"
			break;
		case 8:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/08.png)"
			break;
		case 9:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/09.png)"
			break;
		case 10:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/10.png)"
			break;
		case 11:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/11.png)"
			break;
		case 12:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/12.png)"
			break;
		case 13:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/13.png)"
			break;
		case 14:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/14.png)"
			break;
		case 15:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/15.png)"
			break;
		case 16:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/16.png)"
			break;
		case 17:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/17.png)"
			break;
		case 18:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/18.png)"
			break;
		case 19:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/19.png)"
			break;
		case 20:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/20.png)"
			break;
		case 21:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/21.png)"
			break;
		case 22:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/22.png)"
			break;
		case 23:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexbg/23.png)"
			break;
		default:
			document.getElementById('index-body').style.backgroundImage = "url(./img/indexback.png)"
	}
}

window.onload=function() {
	background();
	afficher();
	setInterval(afficher,1000);
}
