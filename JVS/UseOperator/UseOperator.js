let InputWidth = parseInt;
let InputHeight = parseInt;
let Area;

InputHeight = prompt("Nhập chiều cao hình chữ nhật:"); //hàm prompt lấy giá trị nhập từ user
InputWidth = prompt("Nhập chiều dài hình chữ nhật:");
document.writeln("Chiều cao hình chữ nhật: " + InputHeight);
document.write("<br/>")
document.writeln("Chiều dài hình chữ nhật: " + InputWidth);
Area = InputHeight*InputWidth;
document.write("<br/>");
document.writeln("Diện tích hình chữ nhập: ", + Area);