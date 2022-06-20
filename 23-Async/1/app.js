/* CALLBACK */

function my1(some) {
    console.log(some);
  }
  function f1() {
    my1("Hello");
  }
  function f2() {
    my1("World");
  }
  f1();
  f2();
  
  function my2(some) {
    console.log(some);
  }
  function f3(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  let result = f3(3, 4);
  my2(result); // 7
  
  function my3(some) {
    console.log(some);
  }
  function f4(num1, num2) {
    let sum = num1 + num2;
    my3(sum);
  }
  f4(6, 7); // 13
  
  function my4(some) {
    console.log(some);
  }
  function f5(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  f5(7, 8, my4); // 15
  
  /* ASYNCHRONOUS */
  
  setTimeout(f6, 2000);
  function f6() {
    console.log("Hello World"); // 2s sonra yazdırıyor
  }
  
  setTimeout(function () {
    f7("Merhaba Dünya");
  }, 3000);
  function f7(value) {
    console.log(value); // 3 s sonra yazdırıyor
  }
  
  setInterval(f8, 1000);
  function f8() {
    let d = new Date();
    //   console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); // saat yapıldı. her 1 s de bir fonksiyon çağırılıyor
  }
  
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = function () {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    };
    req.send();
  }
  
  getFile(myDisplayer);
  
  /* PROMİSES */
  /*
  A promise may have one of three states.
  
  Pending --> Bekliyor
  Fulfilled --> Yerine getirilmiş
  Rejected --> Reddedilmiş
  
  myResolve(result value)  -->  Success
  myReject(error object)  -->  Error
  */
  
  const count = true;
  let countValue = new Promise(function (resolve, reject) {
    if (count) {
      resolve("There is a count value.");
    } else {
      reject("There is no count value");
    }
  });
  console.log(countValue); // Promise {<fulfilled>: 'There is a count value.'}
  
  // returns a promise
  let countValue1 = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  // executes when promise is resolved successfully
  countValue
    .then(function successValue(result) {
      console.log(result);
    })
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });
  
  function f9(some) {
    console.log(some);
  }
  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;
  
    // try to change x
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  myPromise.then(
    function (value) {
      f9(value);
    },
    function (error) {
      f9(error);
    }
  ); // OK --> x yerine başka değer verince error yazdırıyor
  
  /*
  BU KONULARI ANLAMADIM */
  
  // setTimeout
  // program to display time every 3 seconds
  /*
  function showTime() {
    // return new date and time
    let dateTime = new Date();
  
    // returns the current local time
    let time = dateTime.toLocaleTimeString();
    document.getElementById("demo").innerHTML = time;
    // console.log(time);
  
    // display the time after 3 seconds
    setTimeout(showTime, 1000);
  }
  
  // calling the function
  showTime(); // program kendini sürekli çağırdığı ve setTime fonksiyonu da her 1 s de bir kendini yenilediği için program sürekli çalışmış olur
  */
  
  // setInterval
  // program to stop the setInterval() method after five times
  
  let counter = 0;
  // function creation
  let interval = setInterval(function () {
    // increasing the count by 1
    counter += 1;
    // when count equals to 5, stop the function
    if (counter === 5) {
      clearInterval(interval);
    }
    // display the current time
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
  }, 2000);
  