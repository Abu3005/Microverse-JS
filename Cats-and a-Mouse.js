function catAndMouse(x, y, z) {
    /*let a;
    let b;
    if (y > x) {
        a = "Cat B";
    }
    if (x > y) {
        a = "Cat A";
    }
    if (arguments[1] = z) {
        b = "Mouse C"
    }
    return a + "\r\n" + b;*/
    let catAPos = Math.abs(z - x); //Absolute value z - x
    let catBPos = Math.abs(z - y);
    if (catAPos < catBPos) {
        return "Cat A";
    } else if (catBPos < catAPos) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
console.log(catAndMouse(2, 5, 4));
console.log(catAndMouse(2, 4, 5));