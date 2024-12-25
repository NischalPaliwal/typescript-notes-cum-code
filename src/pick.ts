interface ValidUser {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

// interface UpdateProps {
//     name: string;
//     age: number;
//     password: string
// }

// using pick we can pick values from both types and interfaces
type UpdateProps = Pick<ValidUser, 'name' | 'age' | 'email'>

const updateUser = (updatedProps: UpdateProps) => {
    // function logic
}