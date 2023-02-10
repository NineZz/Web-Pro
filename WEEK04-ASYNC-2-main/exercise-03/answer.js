// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
  // setTimeout(() => {
  //   document.getElementById("dogTime").innerHTML = 9;
  //   setTimeout(() => {
  //     document.getElementById("dogTime").innerHTML = 8;
  //     setTimeout(() => {
  //       document.getElementById("dogTime").innerHTML = 7;
  //       setTimeout(() => {
  //         document.getElementById("dogTime").innerHTML = 6;
  //         setTimeout(() => {
  //           document.getElementById("dogTime").innerHTML = 5;
  //           setTimeout(() => {
  //             document.getElementById("dogTime").innerHTML = 4;
  //             setTimeout(() => {
  //               document.getElementById("dogTime").innerHTML = 3;
  //               setTimeout(() => {
  //                 document.getElementById("dogTime").innerHTML = 2;
  //                 setTimeout(() => {
  //                   document.getElementById("dogTime").innerHTML = 1;
  //                   setTimeout(() => {
  //                     document.getElementById("dogTime").innerHTML = 0;
  //                     getAPI(
  //                       "https://dog.ceo/api/breeds/image/random",
  //                       (res) => {
  //                         document.getElementById("dogImg").src = res.message;
  //                       },
  //                       (err) => {
  //                         console.log(err);
  //                       }
  //                     );
  //                   }, 1000);
  //                 }, 1000);
  //               }, 1000);
  //             }, 1000);
  //           }, 1000);
  //         }, 1000);
  //       }, 1000);
  //     }, 1000);
  //   }, 1000);
  // }, 1000);

  var count = 10;
  const doge = setInterval(function () {
    if (count >= 0) {
      document.getElementById("dogTime").innerHTML = count;
      count--;
    } else {
      clearInterval(doge);
      getAPI(
        "https://dog.ceo/api/breeds/image/random",
        (res) => {
          document.getElementById("dogImg").src = res.message;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, 1000);
}

// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')
  const rainbow = document.getElementById("rainbow");
  let prom1 = new Promise(function (resolve, reject) {
    if (getResult().text > 5 && getResult().status === "success") {
      resolve(getResult().text);
    } else {
      reject("STATE 1");
    }
  });
  let prom2 = new Promise(function (resolve, reject) {
    if (getResult().text > 5 && getResult().status === "success") {
      resolve(getResult().text);
    } else {
      reject("STATE 2");
    }
  });
  let prom3 = new Promise(function (resolve, reject) {
    if (getResult().text > 5 && getResult().status === "success") {
      resolve(getResult().text);
    } else {
      reject("STATE 3");
    }
  });

  setTimeout(() => {
    // STATE 1 color = 'has-text-primary'
    prom1
      .then((result) => {
        rainbow.className = "has-text-primary";
        rainbow.innerHTML = result;
      })
      .catch((error) => {
        rainbow.className = "has-text-danger";
        rainbow.innerHTML = error;
      });
    setTimeout(() => {
      // STATE 2 color = 'has-text-success'
      prom2
        .then((result) => {
          rainbow.className = "has-text-success";
          rainbow.innerHTML = result;
        })
        .catch((error) => {
          rainbow.className = "has-text-danger";
          rainbow.innerHTML = error;
        });
      setTimeout(() => {
        // STATE 3 color = 'has-text-success'
        prom3
          .then((result) => {
            rainbow.className = "has-text-success";
            rainbow.innerHTML = result;
          })
          .catch((error) => {
            rainbow.className = "has-text-danger";
            rainbow.innerHTML = error;
          });
      }, 2000);
    }, 2000);
  }, 2000);
}

function getResult() {
  const num = Math.floor(Math.random() * 10);
  console.log(num);
  if (num > 5) {
    return {
      status: "success",
      text: num,
    };
  } else {
    return {
      status: "error",
      text: num,
    };
  }
}

// ข้อ 3.3
function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้
  let prom = new Promise(function (resolve, reject) {
    if (num % 2 == 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });
  prom
    .then((result) => {
      document.getElementById("result").innerHTML =
        "success : " + result + " is an even number";
    })
    .catch((error) => {
      document.getElementById("result").innerHTML =
        "Error : " + error + " is not an even number";
    });
}

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000);
  // return promise
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ
}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {}

function fetchData(password) {}

// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
