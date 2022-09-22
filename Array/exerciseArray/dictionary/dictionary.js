function trans(){
    let arr_eng = ["banana", "apple", "orange", "pen", "pencil", "book"];
    let arr_tv = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
    let result = "";
    let a = 0;
    let str = document.getElementById('data').value;
    for (let i =0; i<arr_eng.length; i++){
        if (str==arr_eng[i]){
            a = i;
        }
        for (let j = 0; j<arr_tv.length;j++){
            if (a == j){
                result = arr_tv[j];
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}