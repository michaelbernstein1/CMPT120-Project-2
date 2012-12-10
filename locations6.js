function dysonLocation(){
	txtArea(locationArray[0].locationDesc);
	upCheck = 1;
	if (submittedTapes == false)
		scoreKeep += 5;
	}

function fontaineLocation(){
	txtArea(locationArray[1].locationDesc);
	upCheck = 2;
	if (submittedTapes == false)
		scoreKeep += 5;
	}

function annexLocation(){
	upCheck = 3;
	if (allTapesfound == false && returnJournal == false) {
		txtArea(locationArray[2].locationDesc);		
		var nbutton = document.getElementById("northButton");
		nbutton.setAttribute('disabled', 'disabled');
		if (submittedTapes == false) {
			scoreKeep += 5;		
			tapeNumber = 1;
			txtArea(firstItem.itemDesc);
			}
	}
	else if (allTapesfound == true) {
		txtArea(locationArray[10].locationDesc);
		submittedTapes = true;
		var nbutton = document.getElementById("northButton");
		nbutton.removeAttribute('disabled');
		upCheck = 0;
		var sbutton = document.getElementById("southButton");
		sbutton.removeAttribute('disabled');
		downCheck = 0;
		var ebutton = document.getElementById("eastButton");
		ebutton.removeAttribute('disabled');
		leftCheck = 0;
		var wbutton = document.getElementById("westButton");
		wbutton.removeAttribute('disabled');
		rightCheck = 0;
		var ibutton = document.getElementById("investigateBtn");
		ibutton.removeAttribute('disabled');
		allTapesfound = false;
	}
		else if (submittedTapes == true)	{
			txtArea(locationArray[2].locationDesc);
			var nbutton = document.getElementById("northButton");
			nbutton.setAttribute('disabled', 'disabled');
			if (returnJournal = true){
				txtArea(locationArray[11].locationDesc);
				var sbutton = document.getElementById("southButton");
				sbutton.setAttribute('disabled', 'disabled');
				var ebutton = document.getElementById("eastButton");
				ebutton.setAttribute('disabled', 'disabled');
				var wbutton = document.getElementById("westButton");
				wbutton.setAttribute('disabled', 'disabled');
				var nbutton = document.getElementById("northButton");
				nbutton.setAttribute('disabled', 'disabled');
				var gameComplete = true;
				gameFinished();
			}
		}	
}	

function cafeteriaLocation(){
	txtArea(locationArray[3].locationDesc);
	leftCheck = 1;
	if (submittedTapes == false)
	scoreKeep += 5;
	}

function freshmenLocation(){
	txtArea(locationArray[4].locationDesc);
	leftCheck = 2;
	var wbutton = document.getElementById("westButton");
	wbutton.setAttribute('disabled', 'disabled');
	if (submittedTapes == false){
		scoreKeep += 5;
		tapeNumber = 2;
		txtArea(secondItem.itemDesc);}
	}

function hancockLocation(){
	txtArea(locationArray[5].locationDesc);
	rightCheck = 1;
	if (submittedTapes == false){
		scoreKeep += 5;}
		}

function boathouseLocation(){
	txtArea(locationArray[6].locationDesc);
	rightCheck = 2;
	var ebutton = document.getElementById("eastButton");
	ebutton.setAttribute('disabled', 'disabled');
	if (submittedTapes == false){
		scoreKeep += 5;
		tapeNumber = 3;
		txtArea(thirdItem.itemDesc);
		}
}
function gartlandLocation(){
	txtArea(locationArray[7].locationDesc);
	downCheck = 1;
	if (submittedTapes == false)
		scoreKeep += 5;
	}

function ferntorLocation(){
	txtArea(locationArray[8].locationDesc);
	downCheck = 2;	
	if (submittedTapes == false)
		scoreKeep += 5;
	else
		atFernTor = true;
	}

function woodsLocation(){
	txtArea(locationArray[9].locationDesc);
	scoreKeep += 5;
	downCheck = 3;
	var sbutton = document.getElementById("southButton");
	sbutton.setAttribute('disabled', 'disabled');
	if (submittedTapes == false){
		scoreKeep += 5;
		tapeNumber = 4;
		txtArea(fourthItem.itemDesc);
		}
	}
