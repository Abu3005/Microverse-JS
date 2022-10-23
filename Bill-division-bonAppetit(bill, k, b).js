function bonAppetit(bill, k, b) {
    // Write your code here
    k.splice(1, 1); // from index 1 delete one element
    let a = k.length;
    let total = 0;
    let out;
    for (let i = 0; i < a; i++) {
        total += k[i];
        let cost = total / 2;
        out = b - cost;
        if (cost == b) {
            console.log("Bon Appietit");
        }
    }
    console.log(out);
}
/*function bonAppetit(bill, k, b) {
    let count = 0;
    for (let i = 0; i < bill.length; i++) {
        count += bill[i];
    }
    let cost = count - bill[k];
    let over = b - (cost / 2);
    if (!over) {
        console.log("Bon Appetit");
    }
    else {
        console.log(over);
    }
}*/
console.log(bonAppetit([4, 1], [3, 10, 2, 9], 12));