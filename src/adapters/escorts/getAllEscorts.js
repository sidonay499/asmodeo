import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_GET_ALL_ESCORTS_PROD,
    PUBLIC_GET_ALL_ESCORTS_DEV
} = import.meta.env

export default async function getAllEscorts(page){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_GET_ALL_ESCORTS_PROD : PUBLIC_GET_ALL_ESCORTS_DEV

    try {
        const res = await axios.get(`${URL}/${page}`)
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}