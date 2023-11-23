import axios from 'axios'

const API_URL = 'http://localhost:3002/users'

export const addUser = async (data) => {
    try {
        return await axios.post(API_URL, data)
    } catch (err) {
        console.log(err)
    }

}