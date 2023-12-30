import Person from '../Entities/Person'

export interface reqData {
    results: Person[],
    info: any
}

export interface iDataProvider {
    getAllPersons: () => Promise<reqData>
}