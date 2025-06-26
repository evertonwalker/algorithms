// given a array of elements calculate your ratios.


function plusMinus (arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positives++;
        } else if(arr[i] < 0) {
            negatives++
        } else {
            zeros++;
        }
    }

    console.log((positives/arr.length).toFixed(4));
    console.log((negatives/arr.length).toPrecision(4));
    console.log((zeros/arr.length).toPrecision(4));
}

plusMinus([1, 1 , 0 , -1 ,-1]);