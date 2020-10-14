const checkInput = document.getElementById('check');
checkInput.checked = false;
const textElement = document.getElementById('themes');
checkInput.addEventListener('click', handleThemeChange);

function startClock() {
  setInterval(() => {
    // Get time data
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let hoursToStr;
    let minutesToStr;
    let secondsToStr;

    // Handle 0-9 digits to be with the leading zero
    if (hours < 10) {
      hoursToStr = `0${hours}`;
    } else {
      hoursToStr = hours.toString();
    };

    if (minutes < 10) {
      minutesToStr = `0${minutes}`;
    } else {
      minutesToStr = minutes.toString();
    };

    if (seconds < 10) {
      secondsToStr = `0${seconds}`;
    } else {
      secondsToStr = seconds.toString();
    };

    let currentTimeString = hoursToStr + minutesToStr + secondsToStr;
    let currentTimeArray = currentTimeString.split("");
    let numbersArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    // Get elements from the page
    let hoursTens = document.getElementById("hours-tens");
    let hoursUnits = document.getElementById("hours-units");
    let minutesTens = document.getElementById("minutes-tens");
    let minutesUnits = document.getElementById("minutes-units");
    let secondsTens = document.getElementById("seconds-tens");
    let secondsUnits = document.getElementById("seconds-units");

    // Add class name that will handle displaying a digit
    hoursTens.className = "digit" + " " + numbersArray[currentTimeArray[0]];
    hoursUnits.className = "digit" + " " + numbersArray[currentTimeArray[1]];
    minutesTens.className = "digit" + " " + numbersArray[currentTimeArray[2]];
    minutesUnits.className = "digit" + " " + numbersArray[currentTimeArray[3]];
    secondsTens.className = "digit" + " " + numbersArray[currentTimeArray[4]];
    secondsUnits.className = "digit" + " " + numbersArray[currentTimeArray[5]];
  }, 1000);
};

function handleThemeChange() {
  if (checkInput.checked === true) {
    document.body.className = 'light';
    textElement.className = 'dark-text';
    textElement.textContent = 'Switch to dark theme';
    loadParticles('#638693', 0.7);
  } else {
    document.body.className = 'dark';
    textElement.className = 'light-text';
    textElement.textContent = 'Switch to light theme';
    loadParticles('#EFEFEF', 0.4);
  };
};

function loadParticles(color, opacity) {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789
        }
      },
      "color": {
        "value": `${color}`,
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": opacity,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
        },
        "resize": true
      },
    },
    "retina_detect": true
  });
};

loadParticles('#EFEFEF', 0.4);
startClock();