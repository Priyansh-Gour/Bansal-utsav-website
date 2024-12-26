var countDownDate = new Date("February 21, 2024 23:59:59").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dday").innerHTML = days;
  document.getElementById("dhour").innerHTML = hours;
  document.getElementById("dmin").innerHTML = minutes;
  document.getElementById("dsec").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

var tl = gsap.timeline();


// navbar animations 
tl.from('.navbar', {
    stagger: .3,
    duration: 1,
    y: 20,
    delay: 1,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('.heading', {
    stagger: .3,
    duration: 1,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')

//Menu Button
let sidebarVisible = false;

menubtn.addEventListener("click", (event) => {
    event.preventDefault();
    sidebarVisible = !sidebarVisible;
    if (sidebarVisible) {
        sidebar.classList.remove("hide");
    } else {
        sidebar.classList.add("hide");
    }
});

