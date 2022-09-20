let result = document.getElementById("display");
//tính toán giá trị người dùng nhập vào bằng eval
function caculator(){ 
        let catulator = eval (result.value);
        result.value = catulator;
       
}
//sử lý chức năng ấn nút nhấn 0 - 9 và các nút toán tử trừ dấu bằng và AC trả giả giá tương ứng lên display
function inputButton(buttonValue){
    result.value = result.value + buttonValue;
}
function xoa(){
    document.getElementById("display").value = "";
}