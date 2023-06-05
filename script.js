window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('clickButton');
  var counter = document.getElementById('counter');
  var clickCount = 0;

  button.addEventListener('click', function() {
    clickCount++;
    counter.textContent = clickCount;
  });
});
