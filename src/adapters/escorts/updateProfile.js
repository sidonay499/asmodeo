import axios from "axios"

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_UPDATE_PROFILE_PROD,
    PUBLIC_URL_UPDATE_PROFILE_DEV
} = import.meta.env

export default async function updateProfile(id,prop,valueProp){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_UPDATE_PROFILE_PROD : PUBLIC_URL_UPDATE_PROFILE_DEV

    try {
        const res = await axios.patch(URL,{
                id:id,
                prop:prop,
                valueProp:valueProp
            },
            {
                withCredentials:true    
            }
        )
        return res.data
    } catch (error) {
        return error.response.data.error
    }
}