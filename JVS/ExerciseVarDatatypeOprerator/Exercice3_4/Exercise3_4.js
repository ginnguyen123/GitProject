let Radius;
let Area;
let Perimeter
Radius = parseInt(prompt("Nhập bán kính đường tròn:"))
document.writeln("Bán kính đường tròn:" +Radius)
document.write("<br/>")
Area = Radius*Radius*3.14;
Perimeter = 2*Radius*3.14;
document.writeln("Diện tích đường tròn:" + Area)
document.write("<br/>")
document.writeln("Chu vi đường tròn:" + Perimeter)