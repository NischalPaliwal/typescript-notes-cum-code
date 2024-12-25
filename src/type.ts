type greetArg = number | string;

function greeting(id: greetArg) {
    console.log(`ID: ${id}`);
}

greeting(12);
greeting("21");

type Employees = {
    name: string;
    startDate: Date
}

type Manager = {
    name: string;
    department: string
}

type TeamLead = Employees & Manager;  // intersection

const teamLead : TeamLead = {
    name: "Nischal",
    department: "IT",
    startDate: new Date('23-3-24')
}


// corresponding interfaces to Employees, Manager and TeamLead->
// interface Employees {
//     name: string;
//     startDate: Date
// }
// interface TeamLead extends Employees {
//     department: string;
// }

// interfaces can be implemented by classes
// types lets you do unions and intersections

// types can perform intersection and union on interfaces as well->
// type A = B | C;
// where B and C are both interfaces.