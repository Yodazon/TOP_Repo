// the JavaScript file

const btn = document.querySelector('#btn2, #btn');
btn.addEventListener('click', () => { alert("Hello World");
});


// the JavaScript file
function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  
  // METHOD 2
  btn.onclick = alertFunction;
  
  // METHOD 3
  btn.addEventListener('click', alertFunction);

  btn.addEventListener('click', function (e) {
    console.log(e);
  });
  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });