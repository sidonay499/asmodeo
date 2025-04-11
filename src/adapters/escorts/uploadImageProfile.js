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

    return res.data.url.replace(/^http:\/\//i, "https://")
}

export default uploadImageProfile