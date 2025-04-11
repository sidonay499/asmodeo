import axios from "axios";

const { 
    PUBLIC_PRODUCTION,
    PUBLIC_URL_ADMIN_SIGNIN_PROD,
    PUBLIC_URL_ADMIN_SIGNIN_DEV
} = import.meta.env

export default async function createProfile(values,urlProfile,urlsGalery){
    
    const URL = PUBLIC_PRODUCTION === 'true' ? PUBLIC_URL_ADMIN_SIGNIN_PROD : PUBLIC_URL_ADMIN_SIGNIN_DEV
    
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
            measures:`${values.breast}-${values.waist}-${values.hip}`,
            bodyType:values.bodyType,
            breasts:values.breasts,
            ass:values.ass,
            bioType:values.bioType,
            tattoos:values.tattoos,
            description:'',
            price:null,
            phone:null,
            location:'',
            state:'',
            country:''
        }
    
        const res = await axios.post(URL,admin,{
            withCredentials:true
        })

        return res.data
    } catch (error) {
        return error.response.data.error
    }
}