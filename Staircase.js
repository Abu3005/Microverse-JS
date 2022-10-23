function staircase(n) {
    let a = " ";
    let b = "#";
    for (let i = 1; i <= n; i++) {
        console.log(a.repeat(n - i) + b.repeat(i)); // repeat takes only value > 0 and it repeat horizontally
    }
}
console.log(staircase(6))

/*function staircase(n) {
    let output = ''
    
    // outer for loop to keep track of the overall number of rows (n)
    for (let i = 1; i <= n; i++) {
        for (let s = n - 1; s >= i; s--) {
            output += ' '
        }
        for (let h = 1; h <= i; h++) {
            output += '#'
        }
        // new line
        output += "\n"
       
    }
    // log the final result
    console.log(output)
}
console.log(staircase(6))*/