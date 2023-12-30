export default interface Person {
    id: string,
    name: {
        title: string,
        firstName: string,
        lastName: string,
    },
    email: string,
    usermage: {
        medium: string
    },
    location: {
        country: string,
        city: string,
        street: string,
    }
}