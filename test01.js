 
 
 
 
 
 
 
 
 
 
 // Single line comment

/*

Multiline comment
^_^
T_T

*/

//DATA TYPES ชนิดข้อมูล
//String
console.log("AAAAA");
console.log("BBBBB");
console.log("CCCCC");
//number
console.log(1111);//integer(int)
console.log(15.426879);//float

//boolean
console.log(true);// 1 หรือมีค่าข้อมูลใดๆ
console.log(false);// 0 หรือไม่มีค่าข้อมูลใดๆ

//Null
console.log(null); //ค่า null

//object เขียนอยู่ใสน { } curly bracket และมีรูปแบบเป็น key :value
console.log({
    name: "Sombat",
    age: 20,
    isStudent: true,
    address: {
        province: "Nonthaburi",
        contry: "Thailand"
    },
    food: [KFC, Burger, Pizza]
});

//Array เขียนอยู่ใน [ ] square bracket มีได้หลายข้อมูลคั่นด้วย , comma
//ทุก value ใน array จะมี index number กำกับ โดยเริ่มต้นที่ 0
console.log([1, 2, 3, 4, 5]);
console.log([111, 'Somjai', true, 555, { name: 'Somvat', age: 20 }]);
 
//undefined ยังไม่ได้กำหนดค่า
let x
console.log(x);