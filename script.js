window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('clickButton');
  var counter = document.getElementById('counter');
  var timer = document.getElementById('timer');
  var grade = document.getElementById('grade');
  var clickCount = 0;
  var startTime;

  button.addEventListener('click', function() {
    clickCount++;
    counter.textContent = clickCount;
  });

  setInterval(updateTimer, 1000);

  function updateTimer() {
    if (!startTime) {
      startTime = new Date();
    }
    var currentTime = new Date();
    var elapsedTime = Math.floor((currentTime - startTime) / 1000);
    timer.textContent = elapsedTime;
    updateGrade(elapsedTime, clickCount);
  }

  function updateGrade(time, clicks) {
    if (time <= 15 && clicks >= 50) {
      grade.textContent = "A";
    } else if (time <= 30 && clicks >= 50) {
      grade.textContent = "B";
    } else if (time <= 60 && clicks >= 50) {
      grade.textContent = "C";
    } else {
      grade.textContent = "F";
    }
  } else if (time <= 20 && 50 clicks >= 50) {
    grade.textContent = "ur fast"
  }
});
