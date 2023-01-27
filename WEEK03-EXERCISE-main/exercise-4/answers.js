function mapToSquare(input) {
  // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
  var square = input.map((num) => num ** 2);
  return square;
}

function convertTemperature(input) {
  // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
  function fah_to_celsius(fah) {
    let cel = ((fah - 32) * 5) / 9;
    return Number(cel.toFixed(1));
  }
  var result = input.map((value) =>{
    return {
        date:value.date,
        temperature:fah_to_celsius(value.temperature)
    }
    })
    return result
}

function filterEvenNumber(input) {
  // TODO: filter input เอาเลขคู่เท่านั้น
  var even = input.filter(function (number) {
    return number % 2 == 0
  });
  return even;
}

function filterAgeRange(input) {
  // TODO: กรอง input.people ตามช่วงอายุ
  var peep = input.people.filter(function (value) {
    if(value.age >= input.min & value.age <= input.max){
        return {
            name:value.name,
            age:value.age
        }
    }
  })
  return peep
}

function removeByFilter(input) {
  // TODO: ลบ Object ใน Array ด้วยการ filter
  var test = input.people.filter(function(value) {
    return !(value.id == input.removeId)
  })
  return test
}

function replaceBySplice(input) {
  // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array
  // เรียงลำดับตัวเลขให้ถูกต้อง
//   input.splice(4, 1, 4)
  return input.splice(5, 1, 4)
}
