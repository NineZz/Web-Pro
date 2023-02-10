// ข้อ 3.1
function getDogDemo() {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
  let num = 10;
  clock = setInterval(() => {
    if (num > 0){
      num -= 1;
      document.getElementById("dogTime").innerHTML = num;
    }

    else if (num == 0){
      getAPI("https://dog.ceo/api/breeds/image/random", 
        function success(res){
          console.log("times up!");
          document.getElementById("dogImg").src = res.message;
        },
        function error(){
          console.log("error");
        }
      );
      clearInterval(clock);
    }
  }, 1000)

}


// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

  const rainbow = document.getElementById("rainbow");
    setTimeout(() => {
    // STATE 1 color = 'has-text-primary'
    const result = getResult();
    if (result.status == 'success'){
      rainbow.innerHTML = result.text;
      rainbow.className = 'has-text-primary';
    }
    else{
      rainbow.innerHTML = "STATE 1";
      rainbow.className = 'has-text-danger';
    }
      setTimeout(() => {
        // STATE 2 color = 'has-text-success'
        const result = getResult();
        if (result.status == 'success'){
          rainbow.innerHTML = result.text;
          rainbow.className = 'has-text-success';
        }
        else{
          rainbow.innerHTML = "STATE 2";
          rainbow.className = 'has-text-danger';
        }
        setTimeout(() => {
            // STATE 3 color = 'has-text-success'
            const result = getResult();
            if (result.status == 'success'){
              rainbow.innerHTML = result.text;
              rainbow.className = 'has-text-success';
            }
            else{
              rainbow.innerHTML = "STATE 3";
              rainbow.className = 'has-text-danger';
            }
        }, 2000)

      }, 2000)

    }, 2000)
}

function getResult(){
  const num = Math.floor(Math.random() * 10)
  console.log(num)
  if(num > 5) {
    return {
      'status': 'success',
      'text': num
    }
  }else{
    return {
      'status': 'error',
      'text': num
    }
  }
}

// ข้อ 3.3
function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้
  let resultt = document.getElementById("result");
  let check_num = new Promise(
    function (resolve, reject){
      if (num%2 == 0){
        const ans_even = "success : " + num + " is an even number";
        resolve(ans_even);
      }
      else{
        const ans_odd = "Error : " + num + " is not an even number";
        reject(ans_odd);
      }
    }
  )

  check_num.then((result) => {
    resultt.innerHTML = result;
    console.log(result);
  })
  .catch((error) => {
    resultt.innerHTML = error;
    console.log(error);
  })
}


// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000)
  // return promise
  return new Promise ((resolve, reject) => {
        setTimeout(() => {
          if (delay < 500){
            let ans1 = "task " + id + ": " + delay + "ms ... PASS!";
            resolve(ans1);
          }
          else{
            let ans2 = "task " + id + ": " + delay + "ms ... NOT PASS!";
            reject(ans2);
          }
        }
        , delay)
      }
  )
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ
  // task(1)
    task(1).then(
      (result) => {
        console.log(result);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    task(2).then(
      (result) => {
        console.log(result);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    task(3).then(
      (result) => {
        console.log(result);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    task(4).then(
      (result) => {
        console.log(result);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search 
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  return new Promise((resolve, reject) => {
    if (password === "Cisco"){
      resolve("รหัสผ่านถูกต้อง");
    }
    else{
      reject("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง");
    }
  })
}

function fetchData(password) {
  checkAuth(password).then(
    (result) => {
      alert(result);
      getAPI("https://api.thecatapi.com/v1/images/search", 
        function success(res){
          console.log("success");
          document.getElementById("cat").src = res[0].url;
        },
        function error(){
          console.log("error");
        }
      );
    }
  ).catch(
    (error) => {
      alert(error);
    }
  )
}

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
