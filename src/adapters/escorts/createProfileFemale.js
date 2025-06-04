import axios from "axios";

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_CREATE_PROFILE_PROD,
    PUBLIC_URL_CREATE_PROFILE_DEV
} = import.meta.env

export default async function createProfileFemale(values){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_CREATE_PROFILE_PROD : PUBLIC_URL_CREATE_PROFILE_DEV
    
    try {
        const profile = {
            gender:'FEMALE',
            name:values.name,
            age:values.age,
            heigth:values.heigth,
            weigth:values.weigth,
            hairColor:values.hairColor,
            eyesColor:values.eyesColor,
            shaved:values.shaved,
            measures:`${values.breast}-${values.waist}-${values.hip}`,
            bodyType:values.bodyType,
            breasts:values.breasts,
            ass:values.ass,
            bioType:values.bioType,
            tattoos:values.tattoos,
            description:values.description,
            price:values.price,
            phone:values.phone,
            location:values.location,
            state:values.state,
            country:values.country,
            category:values.category
        }
    
        const res = await axios.post(URL,profile,{
            withCredentials:true
        })

        return res.data
    } catch (error) {
        return error.response.data.error
    }
}