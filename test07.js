// if-else-if พิสูจน์หลายครั้ง
// (พิสูจน์มากกว่า น้อยกว่า เท่ากัน ไม่เท่ากัน ได้หมด)
 
let score = 20
 
if (score >= 80) {
    console.log('A')
}else if (score >= 70) {
    console.log('B')
}else if (score >= 60) {
    console.log('C')
}else if (score >= 50) {
    console.log('D')
}else if( score >= 40) {  // สามารถมี if(  ) ได้
    console.log('F')
}
 
 
// switch พิสูจน์หลายครั้ง
// (พิสูจน์ได้เฉพาะ เท่ากัน หรือไม่เท่านั้น)
 
let bus_no = 91
 
switch ( bus_no ){
    case 84 : console.log('ไปวัดไร่ขิง')
              break
    case 57 : console.log('พาต้า')
              break
    case 123, 80 : console.log('สนามหลวง')
              break
    case 515 : console.log('ไปอนุสวรีชัยสมรภูมิ')
              break
    default : console.log('ไม่รู้จัก')  //default ไม่มีก็ได้
}
