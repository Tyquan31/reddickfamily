// Set the date we're counting down to
var countDownDate = new Date("Aug 21, 2018 09:00:00").getTime();
console.log(countDownDate);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "SHES HERE!!!";
  }
}, 1000);

// var babyButton = document.getElementById('babyRsvp');
// babyButton.addEventListener('mouseenter', function(){
//   babyRsvp.style.backgroundColor = '#eb4d4b';
// });

// babyButton.addEventListener('mouseleave', function(){
//   babyRsvp.style.backgroundColor = '#ff7979';
// });

function animateButtons(element, enterColor, leaveColor) {
  var Buttony = document.getElementById(element);
  Buttony.addEventListener('mouseenter', function(){
    Buttony.style.backgroundColor = enterColor;
  });

  Buttony.addEventListener('mouseleave', function(){
    Buttony.style.backgroundColor = leaveColor;
  });
}

animateButtons('babyRsvp', '#eb4d4b', '#ff7979');
animateButtons('weddingRsvp', '#2980b9', '#3498db');