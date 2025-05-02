import axios from "axios";

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_CREATE_PROFILE_PROD,
    PUBLIC_URL_CREATE_PROFILE_DEV
} = import.meta.env

export default async function createProfileMale(values,urlProfile,urlsGalery){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_CREATE_PROFILE_PROD : PUBLIC_URL_CREATE_PROFILE_DEV
    
    try {
        const profile = {
            imageProfile:urlProfile,
            images:urlsGalery,
            name:values.name,
            age:values.age,
            heigth:values.heigth,
            weigth:values.weigth,
            hairColor:values.hairColor,
            eyesColor:values.eyesColor,
            shaved:values.shaved,
            bodyType:values.bodyType,
            bioType:values.bioType,
            tattoos:values.tattoos,
            description:values.description,
            penis:values.penis,
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