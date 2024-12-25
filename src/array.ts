// arrays in typescript ->

const maxValue = (arr: number[]) : number => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue([21, 22, 34, 54, 71]));

// enums ->

// 

enum Direction {
    Up = "up",  // by default 0
    Down = "down",  // by default 1
    Left = "left",  // by default 2
    Right = "right"  // by default 3
}

const doSomething = (keyPressed: Direction) => {
    console.log(keyPressed);
}

doSomething(Direction.Up);
doSomething(Direction.Left);

// use case in express ->
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}