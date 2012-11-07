function dysonLocation(){
	var msg = "Welcome to Dyson. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	upCheck = 1;}

function fontaineLocation(){
	var msg = "Welcome to Fontaine. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	upCheck = 2;}

function annexLocation(){
	var msg="Welcome to Fontaine Annex. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	upCheck = 3;
	var nbutton = document.getElementById("northButton");
	nbutton.setAttribute('disabled', 'disabled');}
	
function cafeteriaLocation(){
	var msg = "You find yourself wandering west, and you accidentally stumble onto the cafeteria. The hamburgers are like hockey pucks, and the pizza is like wax paper. This is a place you want to avoid. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	leftCheck = 1;}

function freshmenLocation(){
	var msg = "Welcome to the freshman dorms. Here is RA territory, where the RAs rule with an iron fist. All activities are monitored by CCTV closed-circuit recording devices, including the bathrooms. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	leftCheck = 2;
	var wbutton = document.getElementById("westButton");
	wbutton.setAttribute('disabled', 'disabled');}
}
function hancockLocation(){
	var msg = "Looking to the east, you see the Hancock building. It is brand new, and full of computer science or math classes where the classes are very serious and you might actually use in your career. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	rightCheck = 1;}

function boathouseLocation(){
	var msg = "East of the Hancock building is the boathouse. I don't think Marist owns the boathouse, but here you will find rowers. Last year their coach quit because he was getting paid close to minimum wage. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	rightCheck = 2;
	var ebutton = document.getElementById("eastButton");
	ebutton.setAttribute('disabled', 'disabled');}
	
function gartlandLocation(){
	var msg = "Facing south, you find Gartland. Gartland used to be section Eight housing for the homeless until it was purchased from the city of Poughkeepsie by Marist. Somehow, its still some of the best housing! +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	downCheck = 1;}
	
function ferntorLocation(){
	var msg = "South of Gartland we find Fern Tor. This is un-used forested space sourrounding Marist that the college for some reason hasn't used to build new housing yet. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	downCheck = 2;}
	
function woodsLocation(){
	var msg = "South of Fern Tor are the deep woods which run next to the train tracks. These woods are prowled by the homeless and the undead, since security won't let them hang out in Fern Tor. +5 exploration points!";
	txtArea(msg);
	scoreKeep += 5;
	downCheck = 3;
	var sbutton = document.getElementById("southButton");
	sbutton.setAttribute('disabled', 'disabled');}
