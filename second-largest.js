function getSecondLargest(nums) {
    // Complete th
    let largest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) largest = nums[i]
    }
    let second_largest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > second_largest && nums[i] < largest) second_largest = nums[i];
    }
    return second_largest;
}
console.log(getSecondLargest([2, 3, 6, 6, 5]));