interface ValidUser {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type PickedProps = Pick<ValidUser, 'name' | 'age' | 'email'>

type OptionalProps = Partial<PickedProps>

interface Customer {
    id: string;
    name: string;
    age: number;
}

const buyer : Readonly<Customer> = {
    id: '123',
    name: 'John',
    age: 25
}

// Record ->
type UserPool = {
    [key: string]: Pick<ValidUser, 'name' | 'email'>
}

const users : UserPool = {
    "520": {
        name: "Nischal Paliwal",
        email: "nischal@gmail.com"
    },
    "521": {
        name: "Rohit",
        email: "rohitss@gmail.com"
    }
}

const UpdateUser = (user : OptionalProps) => {
    // function logic
}