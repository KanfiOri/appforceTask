export default interface PersonEntity {
    id: {
        name?: string,
        value: string
    },
    name: {
        title: string,
        first: string,
        last: string,
    },
    email: string,
    picture: {
        medium: string
    },
    location: {
        country: string,
        city: string,
        street: {
            name: string
        },
    }
}