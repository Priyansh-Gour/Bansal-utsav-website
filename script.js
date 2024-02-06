var countDownDate = new Date("February 22, 2024 23:59:59").getTime();

      var x = setInterval(function () {

        var now = new Date().getTime();

    
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
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