import axios from "axios"

export default async function getAllEscortsByAdmin(currentPage){
    try {
        const res = await axios.get(`https://asmodeo-back.onrender.com/admin/escort/${currentPage}`,{
            withCredentials:true
        })
        return res.data
    } catch (error) {
        console.log('err',error)
        return error.message
    }
}