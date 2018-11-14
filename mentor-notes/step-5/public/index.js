(function() {
  var redBtn = document.getElementById('red-button');
  var blueBtn = document.getElementById('blue-button');
  var yellowBtn = document.getElementById('yellow-button');
  var body = document.querySelector('body');

  function httpGetRequest(colour) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        body.style.backgroundColor = colour;
      }
    };
    xhr.open('GET', '/', true);
    xhr.send();
  }

  redBtn.addEventListener('click', function() {
    httpGetRequest('red');
  });
  blueBtn.addEventListener('click', function() {
    httpGetRequest('blue');
  });
  yellowBtn.addEventListener('click', function() {
    httpGetRequest('yellow');
  });
})();
