
const mergeSortedArrays = (arr1, arr2) => {
    let mergedArrays = [];
    const length1 = arr1.length;
    const length2 = arr2.length;
    let arr1index = 0;
    let arr2index = 0;

    for (let i = 0; i < (length1 + length2 ); i ++) {
        // console.log (arr1[arr1index],arr2[arr2index] );
        if (arr1[arr1index] > arr2[arr2index]) {
            mergedArrays[i] = arr2[arr2index];
            //If reached end of arr2, we can copy last arr1 items
            if (arr2index === (length2-1) ) {
                mergedArrays.push(...arr1.slice(arr1index)) ;
                return mergedArrays;
            } else {
                arr2index++;
            }
           
        } else {
            mergedArrays[i] = arr1[arr1index];
            //If reached end of arr1, we can copy last arr2 items

            if (arr1index === (length1-1) ) {
                mergedArrays.push(...arr2.slice(arr2index)) ;
                return mergedArrays;
            } else {
                arr1index++;
            }
            

        }
    }

    return mergedArrays;


}

const array1 = [1,2,3,3,4,6];
const array2 = [3,5,10,11,12,16,20];

console.log (mergeSortedArrays (array1, array2))