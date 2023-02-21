document.getElementById("avengers").style.display = "none";
document.getElementById("cap").style.display = "none";
document.getElementById("f4").style.display = "none";
document.getElementById("galactus").style.display = "none";
document.getElementById("hulk").style.display = "none";
document.getElementById("iron").style.display = "none";
document.getElementById("panther").style.display = "none";
document.getElementById("surfer").style.display = "none";
document.getElementById("thor").style.display = "none";
document.getElementById("vision").style.display = "none";
document.getElementById("xmen").style.display = "none";
document.getElementById("antTab").className =
	"accoridon highlight";
	//default setup with all but ant man photo off.
function showAnt() {
	hidePanels();
	document.getElementById("ant").style.display = "block";
	document.getElementById("antTab").className =
	"accoridon highlight";
}
//function to show the ant man photo and change the classes on the tab
function showAvengers() {
	hidePanels();
	document.getElementById("avengers").style.display = "block";
	document.getElementById("avengersTab").className =
	"accoridon highlight";
}
//function to show the avengers photo and change the classes on the tab
function showCap() {
	hidePanels();
	document.getElementById("cap").style.display = "block";
	document.getElementById("capTab").className =
	"accoridon highlight";
}
//function to show the captain america photo and change the classes on the tab
function showF4() {
	hidePanels();
	document.getElementById("f4").style.display = "block";
	document.getElementById("f4Tab").className =
	"accoridon highlight";
}
//function to show the fantastic four photo and change the classes on the tab
function showGalactus() {
	hidePanels();
	document.getElementById("galactus").style.display = "block";
	document.getElementById("galactusTab").className =
	"accoridon highlight";
}
//function to show the galactus photo and change the classes on the tab
function showHulk() {
	hidePanels();
	document.getElementById("hulk").style.display = "block";
	document.getElementById("hulkTab").className =
	"accoridon highlight";
}
//function to show the hulk photo and change the classes on the tab
function showIron() {
	hidePanels();
	document.getElementById("iron").style.display = "block";
	document.getElementById("ironTab").className =
	"accoridon highlight";
}
//function to show the iron man photo and change the classes on the tab
function showPanther() {
	hidePanels();
	document.getElementById("panther").style.display = "block";
	document.getElementById("pantherTab").className =
	"accoridon highlight";
}
//function to show the black panther photo and change the classes on the tab
function showSurfer() {
	hidePanels();
	document.getElementById("surfer").style.display = "block";
	document.getElementById("surferTab").className =
	"accoridon highlight";
}
//function to show the silver surfer photo and change the classes on the tab
function showThor() {
	hidePanels();
	document.getElementById("thor").style.display = "block";
	document.getElementById("thorTab").className =
	"accoridon highlight";
}
//function to show the thor photo and change the classes on the tab
function showVision() {
	hidePanels();
	document.getElementById("vision").style.display = "block";
	document.getElementById("visionTab").className =
	"accoridon highlight";
}
//function to show the vision photo and change the classes on the tab
function showXmen() {
	hidePanels();
	document.getElementById("xmen").style.display = "block";
	document.getElementById("xmenTab").className =
	"accoridon highlight";
}
//function to show the xmen photo and change the classes on the tab
function hidePanels() {
	document.getElementById("ant").style.display = "none";
	document.getElementById("avengers").style.display = "none";
	document.getElementById("cap").style.display = "none";
	document.getElementById("f4").style.display = "none";
	document.getElementById("galactus").style.display = "none";
	document.getElementById("hulk").style.display = "none";
	document.getElementById("iron").style.display = "none";
	document.getElementById("panther").style.display = "none";
	document.getElementById("surfer").style.display = "none";
	document.getElementById("thor").style.display = "none";
	document.getElementById("vision").style.display = "none";
	document.getElementById("xmen").style.display = "none";
	document.getElementById("antTab").className = "accordion";
	document.getElementById("avengersTab").className = "accordion";
	document.getElementById("capTab").className = "accordion";
	document.getElementById("f4Tab").className = "accordion";
	document.getElementById("galactusTab").className = "accordion";
	document.getElementById("hulkTab").className = "accordion";
	document.getElementById("ironTab").className = "accordion";
	document.getElementById("pantherTab").className = "accordion";
	document.getElementById("surferTab").className = "accordion";
	document.getElementById("thorTab").className = "accordion";
	document.getElementById("visionTab").className = "accordion";
	document.getElementById("xmenTab").className = "accordion";
}
//hides all photos and sets all tabs to default.