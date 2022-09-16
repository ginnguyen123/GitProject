function dayInTheMonth(){
    let month = parseInt(document.getElementById('month').value);
    switch(true){
        case (month <=0 || month>12):
            document.getElementById('display').innerHTML = "Số tháng không hợp lệ!";
            break;
        case (month == 2):
            document.getElementById('display').innerHTML = `Tháng ${month} có 28/29 ngày`;
            break;
        case (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12):
            document.getElementById('display').innerHTML = `Tháng ${month} có 31 ngày`;
            break;
        case (month == 4 || month == 6 || month == 9 || month == 11):
                document.getElementById('display').innerHTML = `Tháng ${month} có 30 ngày`;
                break;
    }

}