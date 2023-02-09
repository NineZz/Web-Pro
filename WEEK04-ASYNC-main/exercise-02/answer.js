// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    // You code here
    if (window.confirm("Confirm?")) {
        callback(`ยืนยันจ้า`)
    } else {
        callback(`ไม่ดีกว่า`)
    }
}

// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
    setTimeout(() => {
        document.getElementById('start').innerHTML = `Program started`
        setTimeout(() => {
            document.getElementById('process').innerHTML = `Hello World`
            setTimeout(() => {
                document.getElementById('end').innerHTML = `Program ended`
            }, 1000)
        }, 2000)
    }, 0)
}

// ข้อ 2.3
function stopTime() {
    var inp = document.getElementById('Time').value;

    setInterval(function () {
        if (inp > 0) {
            var min = Math.floor(inp / 60)
            var sec = inp % 60
            if (min < 10) {
                document.getElementById('setMinute').innerHTML = '0' + min
            } else {
                document.getElementById('setMinute').innerHTML = min
            }
            if (sec < 10) {
                document.getElementById('setSecond').innerHTML = '0' + sec
            } else {
                document.getElementById('setSecond').innerHTML = sec
            }
            inp--;
        } else {
            clearInterval;
            document.getElementById('setMinute').innerHTML = '00'
            document.getElementById('setSecond').innerHTML = '00'
        }
    }, 1000)
}

