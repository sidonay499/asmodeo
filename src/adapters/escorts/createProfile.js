import axios from "axios";

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_CREATE_PROFILE_PROD,
    PUBLIC_URL_CREATE_PROFILE_DEV
} = import.meta.env

export default async function createProfile(values,gender){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_CREATE_PROFILE_PROD : PUBLIC_URL_CREATE_PROFILE_DEV
    try {
        const profile = {
            gender:gender,
            name:values.name,
            age:values.age,
            heigth:values.heigth,
            weigth:values.weigth,
            hairColor:values.hairColor,
            eyesColor:values.eyesColor,
            shaved:values.shaved,
            bodyType:values.bodyType,
            breasts:values.breasts,
            ass:values.ass,
            bioType:values.bioType,
            tattoos:values.tattoos,
            description:values.description,
            price:values.price,
            phone:values.phone,
            location:values.location.toUpperCase().trim(),
            state:values.state.toUpperCase().trim(),
            country:values.country.toUpperCase().trim(),
            category:values.category
        }

        if(values.breast && values.waist && values.hip){
            profile.measures = `${values.breast}-${values.waist}-${values.hip}`
        }
    
        const res = await axios.post(URL,profile,{
            withCredentials:true
        })

        return res.data
    } catch (error) {
        console.log(error)
        return error.response.data.error
    }
}