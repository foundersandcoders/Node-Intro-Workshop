(function() {

  const redBtn = document.getElementById('red-button');
  const blueBtn = document.getElementById('blue-button');
  const yellowBtn = document.getElementById('yellow-button');
  const body = document.querySelector('body');

  var httpGetRequest = (colour) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        body.style.backgroundColor = colour;
      }
    };
    xhr.open('GET', '/', true);
    xhr.send();
  };

  redBtn.addEventListener('click', () => {
    httpGetRequest('red');
  });
  blueBtn.addEventListener('click', () => {
    httpGetRequest('blue');
  });
  yellowBtn.addEventListener('click', () => {
    httpGetRequest('yellow');
  });

})();
