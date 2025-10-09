import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_GET_PARAM_PROD,
    PUBLIC_GET_PARAM_DEV
} = import.meta.env

export default async function getParams(page,param,value) {
    try {
        const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_GET_PARAM_PROD : PUBLIC_GET_PARAM_DEV

        const res = await axios.get(`${URL}/${page}/${param}/${value}`)

        return res.data
    } catch (error) {
        throw error.message
    }
}