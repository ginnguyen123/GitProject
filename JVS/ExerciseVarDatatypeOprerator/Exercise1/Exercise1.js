let Phy;
let Chem;
let Bio;
let AverageValue3;
// Phy: Nhập điểm Vật lý
// Chem: nhập điểm hóa
// Bio: nhập điểm sih
// AverageValue điểm trung bình 3 môn
Phy = parseInt (prompt("Nhập điểm môn Lý:"));
Chem= parseInt (prompt("Nhập điểm môm Hóa học:"));
Bio =  parseInt(prompt("Nhập điểm môn Sinh học:"));
document.writeln("Nhập điểm môn Vật Lý:" + Phy)
document.write("<br/>")
document.writeln("Nhập điểm môn Hóa:" + Chem)
document.write("<br/>")
document.writeln("Nhập điểm môn Sinh học:" + Bio)
document.write("<br/>")
AverageValue = (Phy+Chem+Bio)/3;
document.writeln("Điểm trung bình:" + AverageValue)