type Input = number[] | string[];

function firstElement(arr : Input) {
    return arr[0];
}

const value = firstElement(["nischal", "paliwal", "hello", "world"]);
// console.log(value);

// re-writing the above function using generics ->
function firstElementGeneric<T>(arr: T[]) : T {
    return arr[0];
}

const value1 = firstElementGeneric([1, 2, 3, 4, 5]);
console.log(value1);
// const value1 = firstElementGeneric<number>([1, 2, 3, 4, 5]); also correct
const value2 = firstElementGeneric(["nischal", "paliwal", "hello", "world"]);
console.log(value2.toUpperCase());
// const value2 = firstElementGeneric<string>(["nischal", "paliwal", "hello", "world"]); also correct