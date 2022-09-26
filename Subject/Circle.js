let circle = function (radius){
    this.radius = radius;
    this.getRadius = function(){
        return radius;
    }
    this.getArea = function(){
        return 3.14*radius*radius;
    }
}
let c = new circle(3);
let r = circle.getRadius();
let s = c.getArea();
alert(s + "===" + r);