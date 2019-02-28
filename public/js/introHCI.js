// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();

}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	//$(function(){}) == $(document).ready(function() {})
	$(function() {
 		$(".judge-img").bind("taphold",tapholdHandler);
 		
 		function tapholdHandler(event) {
 			//Get the id of the event course
 			var targetIDPrefix = event.target.id;
 			console.log("got prefix: " + targetIDPrefix);
 			//Show bio
 			$("#" + targetIDPrefix + "-bio").show();
 		}
 	});
 	$(function() {
 		$("div.box").bind("taphold",tapholdHandler);

 		function tapholdHandler(event) {
 			//Get the id of the event course
 			$(event.target).addClass("taphold");
 		}
 	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
  $('#rsvpForm').submit(function(e) {
  	//Prevent reload
  	e.preventDefault();
  	console.log('submitting form...');
  	var rsvpEmail = $("#rsvpEmail").val();
  	//Send the POST request
  	$.post('addRSVP',{ rsvpEmail: rsvpEmail},postCallback);
  })
  function postCallback(res) {
  	alert("RSVP form successfully submitted!");
  	$("#rsvpEmail").val(''); //Clear form
  }
}