//parameter: tham số function a(name) - thì name là tham số
//agrument: đối số là lúc gọi hàm truyền vào - a("axy") - thì axy là đối số truyền vào tham số
/// (khái niệm temlet string)
function generateArray(size){
    let arr = new Array(size);
    for (let i = 0; i<arr.length; i++){
        arr[i] = Mathfloor(Math.random()*(30 - 10 +1) + 10);
        
    }
    return arr;
}