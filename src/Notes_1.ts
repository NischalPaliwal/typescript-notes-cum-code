// loosely typed v/s strongly typed languages

// need of typescript?

const greet = (firstName : string) => {
    console.log("Hello " + firstName + "!");    
}

greet("Nischal");

const sum = (a: number, b: number) : number => {
    return a + b;
}

console.log(sum(25, 45));

const runAfter1S = (fn: () => void) => {
    setTimeout(fn, 1000);
}

const fn = () => {
    console.log("hi there!");
}

// zod is for runtime type checks whereas checks in typescript happens during compile time
// while the compiler is compiling the code into js code.

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // email is an optional argument
}

function isLegal(user: User) : boolean {
    if (user.age) {
        return true;
    }
    return false;
}

console.log(isLegal(
    {
        firstName: "Nischal",
        lastName: "Paliwal",
        age: 20
    }
));