// arrow function/function arrow
// ใช้หลักการเดียวกัน function expression

let data1 = () => {
    console.log('111')
}

let data2 = (n1,n2) => {
    return 'Wow Wow Wow'
}

let data3 = 555

data1()
console.log(data2(100,200))
data1 ='Hello'
console.log(data1)

// กรณี Parameter มีตัวเดียว ไม่จำเป็นต้องใช้ ()
let info1 = param1 => {
    console.log('param1')
}
// กรณี คำสั่งการทำงานมีคำสั่งเดียว ไม่จำเป็นต้องใช้ {}
let info2 =param1 => console.log('param1')

// กรณีที่มีคำสั่งการ มีคำสั่งเดียว และเป็นreturn หากไม่ใช้ {} ต้องไม่มีreturn
let info3 = () => {
    return 111;
}