        let myDate = function (days, month, year) {
            let date;
            //hàm myDate có 3 tham số truyền vào gồm days, month, year
            this.day = days;
            this.month = month; 
            this.year = year;
            //xây dựng cách gọi trả về giá trị ngày, tháng, năm
            this.getDay = function(){
                return this.day;
            }
            this.getMonth = function(){
                return this.month;
            }
            this.getYear = function(){
                return this.year;
            }
            //Xây dựng phương thức thiết lập giá trị của đổi tượng date, cụ thể là gán day, month, year ở đối tượng
            this.setDay = function(days){
                this.day = days;
            }
            this.setMonth = function(month){
                this.month = month; 
            }
            this.setYear = function (year){
                this.year = year;
            }
            // this.setDate = function(date){
            //     date = `${this.day} / ${this.month} / ${this.year}`
            //     this.date = date
            // }
        }
    let testDate = new myDate(25,09,2022);
    let day = testDate.getDay();
    let month = testDate.getMonth(); 
    let year = testDate.getYear(); 
    alert(day + "/" + month + "/" + year);