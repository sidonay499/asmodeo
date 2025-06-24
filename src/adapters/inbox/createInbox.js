import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_INBOX_PROD,
    PUBLIC_URL_INBOX_DEV
} = import.meta.env

export default async function createInbox(values){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_INBOX_PROD : PUBLIC_URL_INBOX_DEV

    try {
        const { name,message } = values

        const admin = {
            name:name,
            message:message
        }
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}