var CONST_IMAGE = "images/";

function engineStart() {
    setStartingConditions();
	
	populateHeader();
	populateFooter();	
	populateMain();
}

function setStartingConditions() {
	chanegPageTitle("Geek.Melbourne - Curated Melbourne");
}

//==================
//Main Section 
//==================
function populateMain() {
	//Title
	$("#main").append(htmlPageHeading("Calendar"));
	$("#main").append("<div id='calendar'></div>");
	createCalendar();
}

//==================
//Calendar Section 
//==================

function createCalendar() {
		$("#calendar").fullCalendar({
			theme: true,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			defaultDate: new Date(),
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			events: {
				url: 'php/get-events.php',
				error: function() {
					$('#script-warning').show();
				}
			},
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
		});
}

//==================
//Header Section 
//==================
function populateHeader() {
	$("#site-header").append(htmlImage("banner.jpg", "Geek.Melbourne"));
	$("#site-header").append("<div id='page-title'><h1>Geek.Melbourne</h1></div>");
	populateBannerMenu();
	
}

function populateBannerMenu() {
	$("#site-nav").append("Home | Calendar | About");
}

//==================
//Footer Section 
//==================
function populateFooter() {
	$("#footer-nav").append("Home | Calendar | About");
}

//==================
//HTML Production 
//==================
function chanegPageTitle(title) {
	document.getElementsByTagName("title")[0].text = title;
}

function htmlImage(fileName, altText) {
	return "<img src='" + CONST_IMAGE + fileName + "' alt='" + altText + "' />";
}

function htmlDiv(className) {
	return "<div id='" + className + "'></div>";
}

function htmlPageHeading(headingName) {
	return "<h2>" + headingName + "</h2>";
}