import { iDataProvider, reqData } from "../dataProvider/iDataProvider";
import axios from 'axios'

export default class AxiosDataProvider implements iDataProvider {
    async getAllPersons(): Promise<reqData> {
        try {
            const res = await axios.get("https://randomuser.me/api/?page=1&results=10&seed=abc")
            return res.data
        } catch(e) {
            console.error("Error in fetch all Persons: ", e)
            throw e
        }
    } 
}