// เชื่อมข้อมูลหลายๆ ตัวเข้าด้วยกัน
let data1 = 'DTI'
let data2 = 'SAU'
console.log(data1+' WOW '+data2+' '+(10*20))
console.log(data1,'WOW',data2,' ',(10*20))
console.log(`${data1} WOW ${data2}`)
console.log('........')



// คำสั่ง break และ continue ในloop
// break ในรloop เมื่อถูกทำงาน จะจบ  loop
// continue ใน loop เมื่อถูกทำงาน จะไม่ทำงานต่อไป
for (let x = 1; x <= 5; ++x) {
    if (x == 3) {
       break
    }
     console.log(x, 'DTI')
}
console.log('........')
for (let y = 1; y <= 5; ++y) {
    if (y == 3) {
       continue
    }
    console.log(y, 'DTI')
    
}