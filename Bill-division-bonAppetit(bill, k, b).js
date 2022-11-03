
// Correct solution bellow
function bonAppetit(bill, k, b) {
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
}
console.log(bonAppetit([4, 1], [3, 10, 2, 9], 12));