if (new Date().getHours() < 18) {
    document.getElementById("demo2").innerHTML = "Good Day.";
  } else {
    document.getElementById("demo1").innerHTML = "Good Night!";
  }
  
  var d = new Date().getHours();
  var message;
  if (d < 18) {
    message = "Good Day.";
  } else {
    message = "Good Night!";
  }
  document.getElementById("demo3").innerHTML = message;
  
  var d = new Date().getHours();
  var message;
  if (d < 10) {
    message = "Good Morning.";
  } else if (d < 20) {
    message = "Good Day..";
  } else {
    message = "Good Night";
  }
  document.getElementById("demo4").innerHTML = message;
  
  var x;
  if (Math.random() < 0.5) {
    x = `${Math.random()} is smaller than 0.5.`;
  } else {
    x = `${Math.random()} is bigger than 0.5.`;
  }
  document.getElementById("demo5").innerHTML = x;
  