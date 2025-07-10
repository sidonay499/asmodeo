import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_UPDATE_PROFILE_PROD,
    PUBLIC_URL_UPDATE_PROFILE_DEV
} = import.meta.env

export default async function updateProfile(id,prop,valueProp){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_UPDATE_PROFILE_PROD : PUBLIC_URL_UPDATE_PROFILE_DEV

    try {
        const res = await axios.post(URL,{
                id:id,
                prop:prop,
                valueProp:valueProp
            },
            {
                withCredentials:true    
            }
        )
        console.log('response',res)
        return true
    } catch (error) {
        console.log('error',error)
        return error
    }
}