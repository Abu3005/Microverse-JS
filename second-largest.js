function getSecondLargest(nums) {
    // Complete the 
        let k = nums.splice(Math.max(...nums));
        Math.max(...nums);
    return k;
}
console.log([2, 3, 6, 6, 5])