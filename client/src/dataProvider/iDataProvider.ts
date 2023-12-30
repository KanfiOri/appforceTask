import PersonEntity from '../Entities/Person'

export interface reqData {
    results: PersonEntity[],
    info: any
}

export interface iDataProvider {
    getAllPersons: () => Promise<reqData>
}