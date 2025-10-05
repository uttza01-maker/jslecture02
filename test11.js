//Loop กับ Object
let dataObj = {
  name: "Sombat",
  age: 20,
  isStudent: true,
  address: {
    province: "Nonthaburi",
    contry: "Thailand",
  },
  food: ["KFC", "Pizza", "Burger"],
};
//เข้าถึงข้อมูลแต่ละตัวของ object โดยใช้ key
console.log(dataObj.name);
console.log(dataObj.address.province);
console.log(dataObj.food[2]);
dataObj.address.contry = "USA";
console.log(dataObj.address.contry);
console.log("---------------------");
console.log(dataObj);

// เข้าถึงข้อมูลทุกตัวใน Object
for (let key in dataObj) {
  console.log(key);
}
console.log("...........");

for (let [key, values] in Object.entries(dataObj)) {

  console.log(key);
  console.log(values);
}
// การเข้าถึง key และ value จาก Object.entries() จะใช้ for...of ที่ถูกต้องคือแบบนี้:
for (let [key, value] of Object.entries(dataObj)) {
  console.log(key, value);
}

console.log("...........");

for (let values of Object.values(dataObj)) {
  console.log(values);
}
console.log("...........................");

for (let key of Object.keys(dataObj)) {
  // แก้ไข Object.key เป็น Object.keys
  console.log(key);
}
