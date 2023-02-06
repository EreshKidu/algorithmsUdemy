/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfArray = array => {
    let sum = 0;
    for (let item of array) {
        sum+=item;
    }

    return sum;
}

const maxSubArray = nums => {
    const numsLen = nums.length;
    let largestSum = nums[0];
    let currentSum = nums[0];
    let prevSum = nums[0];

    let startIndex = 0;
    let endIndex = 0;

    for (let i = startIndex; i < numsLen; i ++) {
        console.log ('start', i)
        currentSum = nums[i];
        for (let j =i; j < numsLen; j++ ){
            console.log (currentSum, nums[j], i , j, prevSum);
            if (currentSum > largestSum) {
                prevSum = largestSum;
                largestSum = currentSum;
                console.log ('new max',largestSum );

            } 
            if (currentSum < 0) {
                console.log ('break');
                // i = j;
                break;
            }
            currentSum += nums[j+1];

        }
    }

    return largestSum;

    
};


const maxSubArray2 = nums => {
    const numsLen = nums.length;
    let largestSum = nums[0];
    let currentSum = nums[0];
    let prevSum = nums[0];

    let startIndex = 0;
    let endIndex = 0;

    for (let i = startIndex; i < numsLen; i ++) {

        

            console.log (currentSum, nums[i], i , prevSum);
            if (currentSum > largestSum) {
                prevSum = largestSum;
                largestSum = currentSum;
                console.log ('new max',largestSum );

            } 
            if (currentSum < 0) {
                currentSum = nums[i+1];
                console.log ('break');
                continue;

            }
            currentSum += nums[i+1];
       
    }

    return largestSum;

};


const nums =[-2,-1];
console.log ('RESULT', maxSubArray2(nums));