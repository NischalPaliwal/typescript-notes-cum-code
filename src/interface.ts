interface Person {
    name: String;
    age?: number;  // age is optional
    greet: (phrase: string) => void;
    // greet(phrase: string) : void;
}

class Employee implements Person {
    name: String;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`); 
    }
}

const e1 = new Employee("Nischal", 20);
e1.greet("Hello");