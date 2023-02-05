var isPalindrome = function(x) {

    const xString = x.toString();

    const len = xString.length;
    
    for (let i = 0; i < Math.floor(len /2); i ++) {
        console.log( xString[i], xString[len-i-1]);
        if (xString[i] != xString[len-i-1]) {
            console.log ('false');
            return false;
        }

    }
    console.log ('true');
    return true;
    
};

isPalindrome (-121);