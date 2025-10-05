//3. no parameter, has return
function showHello() {
    return "Hello..";
}

function showsmile() {
    console.log("SMILE");
    return ">_<";
}

function showsad() {
    console.log("SAD");
    return "T_T";
}
console.log(showHello() ); //showHello();
console.log(showsmile() ); //showsmile();
let data = showsad() ;
console.log(data);