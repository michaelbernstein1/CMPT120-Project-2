function dysonLocation(){	
	txtArea(locationArray[0].locationDesc);
	scoreKeep += 5;
	upCheck = 1;}
function fontaineLocation(){	
	txtArea(locationArray[1].locationDesc);
	scoreKeep += 5;
	upCheck = 2;}
function annexLocation(){	
	txtArea(locationArray[2].locationDesc);
	scoreKeep += 5;
	upCheck = 3;
	var nbutton = document.getElementById("northButton");
	nbutton.setAttribute('disabled', 'disabled');
	tapeNumber = 1;	
	txtArea(firstItem.itemDesc);}
function cafeteriaLocation(){	
	txtArea(locationArray[3].locationDesc);
	scoreKeep += 5;
	leftCheck = 1;}
function freshmenLocation(){	
	txtArea(locationArray[4].locationDesc);
	scoreKeep += 5;
	leftCheck = 2;
	var wbutton = document.getElementById("westButton");
	wbutton.setAttribute('disabled', 'disabled');
	tapeNumber = 2;	
	txtArea(secondItem.itemDesc);}
function hancockLocation(){	
	txtArea(locationArray[5].locationDesc);
	scoreKeep += 5;
	rightCheck = 1;}
function boathouseLocation(){	
	txtArea(locationArray[6].locationDesc);
	scoreKeep += 5;
	rightCheck = 2;
	var ebutton = document.getElementById("eastButton");
	ebutton.setAttribute('disabled', 'disabled');
	tapeNumber = 3;	
	txtArea(thirdItem.itemDesc);}	
function gartlandLocation(){	
	txtArea(locationArray[7].locationDesc);
	scoreKeep += 5;
	downCheck = 1;}	
function ferntorLocation(){	
	txtArea(locationArray[8].locationDesc);
	scoreKeep += 5;
	downCheck = 2;}	
function woodsLocation(){	
	txtArea(locationArray[9].locationDesc);
	scoreKeep += 5;
	downCheck = 3;
	var sbutton = document.getElementById("southButton");
	sbutton.setAttribute('disabled', 'disabled');
	tapeNumber = 4;	
	txtArea(fourthItem.itemDesc);}
