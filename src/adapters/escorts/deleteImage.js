import axios from "axios"

const { 
    PUBLIC_CLOUD_NAME
} = import.meta.env

const deleteImage = async (image)=>{

    const res = await axios.post(image, formData, {
        method:'DELETE',
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })

    const originalUrl = res.data.url.replace(/^http:\/\//i, "https://")
    const resizeUrl = originalUrl.replace('/upload/', '/upload/w_400,h_500,c_fill/')

    return resizeUrl
}

export default deleteImage