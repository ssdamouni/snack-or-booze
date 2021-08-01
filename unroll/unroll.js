const square = [[1,   2,  3,   4],
                [5,   6,  7,   8],
                [9,  10, 11,  12],
                [13, 14, 15,  16]];

const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
    ];

const unrolledArray = [];
function unroll(squareArray) {
    if (squareArray.length === 0){    
        return unrolledArray;
    }

    unrolledArray.push(...squareArray.shift());
    if (squareArray.length === 0){    
        console.log(unrolledArray, 'this is the one')
        return unrolledArray;
    }

    for (element in squareArray){
        unrolledArray.push(squareArray[element].pop())
    }
    if (squareArray.length === 0){    
        return unrolledArray;
    }

    unrolledArray.push(...squareArray.pop().reverse())
    if (squareArray.length === 0){ 
        
    console.log(unrolledArray)   
        return unrolledArray;
    }

    unrolledArray.push(...squareArray.map(arr => arr.shift()).reverse());
    if (squareArray.length === 0){
        
    console.log(unrolledArray)    
        return unrolledArray;
    }

    unrolledArray.push(...squareArray.shift());
    if (squareArray.length === 0){    
        
    console.log(unrolledArray)
        return unrolledArray;
    }

    unrolledArray.push(...squareArray.shift().reverse());
    if (squareArray.length === 0){    
        return unrolledArray;
    }
    console.log(unrolledArray)
    unroll(squareArray)

}

console.log(unroll(square))

console.log(unroll(smallerSquare))

module.exports = unroll;
