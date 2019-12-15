/*
		Your Name: <Enter Your Name>
		Last Modified Date: <Enter The Date in mm/dd/yyyy format>
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;

// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
//Display the countdown timer in an element
// Set the date we're counting down to 
var countDownDate = new Date().getTime();
countDownDate = countDownDate + 600000;
// Update the count down every 1 second
var x = setInterval(function() {
// Get todays date and time
var now = new Date().getTime();
// Find the distance between now and the count down date + 10 minutes
var distance = countDownDate - now;
// Time calculations for minutes and seconds
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Display the result in the element with id="timer"
document.getElementById("timer").innerHTML = minutes + " minutes " + seconds + " seconds";
// If the count down is finished, write some text
	if (distance < 0) {
	clearInterval(x);
	document.getElementById("transactionTimer").innerHTML = "EXPIRED";
	alert("Time Expired, Redirecting to Shopping Cart");
	window.location.href = "http://nova.umuc.edu/~ct388a03/Project3/event_registration.html";
	}
}, 1000);//This gives a warning after 10 minutes elapse, counts down by seconds, redirects user to same page after timer expires.

//Function to calculate number of tickets and price of purchase
function calculateTotal() {
	var numberOfTickets = document.getElementById("numTickets").value;
	document.getElementById('totalCost').value = "$" + ((costPerTicket + ticketSurcharge) * numberOfTickets).toFixed(2);
} 
//Function to check input validity, alert user of errors, and display contact information.
function inputValidate() {
	var inputObject = document.getElementById("numTickets");
	if (!inputObject.checkValidity()) { 
		alert("Please enter whole numbers only. No more than 3 tickets.");
		window.location.href = "http://nova.umuc.edu/~ct388a03/Project3/event_registration.html";
	} else {
		alert("Input OK");
	} if (checkValidity = true){
		document.getElementById("contactInformation").style.display = "block";
	}
} 
//Function to review user email is valid.
function validateEmail() {
	var inputEmail = document.getElementById("email");
	if (!inputEmail.checkValidity()){
	alert("Please enter a valid email address");
	}
}
//Complete purchase by sending email to client.
function completePurchase(){
	document.getElementById("contact").submit(alert("Thank you for your purchase!"));

}