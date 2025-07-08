import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_UPDATE_PROFILE_PROD,
    PUBLIC_UPDATE_PROFILE_DEV
} = import.meta.env

export default async function updateParam(param,value,id){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_UPDATE_PROFILE_PROD : PUBLIC_UPDATE_PROFILE_DEV

    try {
        const res = await axios.get(`${URL}/${param}/${value}/${id}`)
        return res.data

    } catch (error) {
        return error.response.data.error
    }
}