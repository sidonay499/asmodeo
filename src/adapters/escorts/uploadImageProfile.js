import axios from "axios"

const { 
    PUBLIC_CLOUD_NAME
} = import.meta.env

const uploadImageProfile = async (formData,profileImg)=>{

    formData.append('file', profileImg);
    formData.append('upload_preset', 'preset_asmodeo');
    formData.append('folder', 'profile');

    const URL= `https://api.cloudinary.com/v1_1/${PUBLIC_CLOUD_NAME}/image/upload`

    const res = await axios.post(URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })

    const originalUrl = res.data.url.replace(/^http:\/\//i, "https://")
    const resizeUrl = originalUrl.replace('/upload/', '/upload/w_400,h_500,c_fill/')

    return resizeUrl
}

export default uploadImageProfile