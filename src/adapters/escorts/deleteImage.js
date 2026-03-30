import axios from "axios"

const deleteImage = async (image)=>{

    const res = await axios.post(`https://asmodeo-back.onrender.com/admin/escort/update/delete/${image}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })

    return res
}

export default deleteImage