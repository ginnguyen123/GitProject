function caculator(act) // tính toán giá trị
    {
        let numberA = parseInt(document.getElementById('numbera').value);
        let numberB = parseInt(document.getElementById('numberb').value); //giong voi b.value = numberB; cách khai báo biến không quan tâm đến số thực hoặc số nguyên biến a=Number(id.value)
        // innerHTML gán ngược về ID ở HTML - chuỗi cộng số ra chuỗi, số trừ chuỗi ra số = 0
        let result;

        if(act =='Cộng (+)'){
            result = numberA + numberB;
        }
        if(act=='Trừ (-)'){
            result = numberA - numberB;
        }
        if(act == 'Nhân (x)'){
            result = numberA*numberB;
        }
        if(act == 'Chia (/)'){
            result = numberA/ numberB;
        }
    document.getElementById('result').innerHTML = result;
    }
//typeof dùng để biết biến ở dạng nào, cú pháp: console(typeof(tên_biến)); viết ở console trên browne