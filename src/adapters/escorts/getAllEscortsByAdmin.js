import axios from "axios"
import setStorage from "../../utils/setStorage"

export default async function getAllEscortsByAdmin(currentPage){
    try {
        const res = await axios.get(`https://asmodeo-back.onrender.com/admin/escort/${currentPage}`,{
            withCredentials:true
        })
        return res.data
    } catch (error) {
        if(error.response.data.error === "Faltan credenciales"){
            setStorage('clear')
        }
        return error.response.data.error
    }
}