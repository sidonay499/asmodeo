import axios from "axios"

const { 
    PUBLIC_CLOUD_NAME
} = import.meta.env

const uploadImageGalery = async (formData,galeryImgs)=>{
    const galery = []

    for (let i = 0; i < galeryImgs.length; i++) {
        const element = galeryImgs[i];
        
        formData.append('file', element);
        formData.append('upload_preset', 'preset_asmodeo');
        formData.append('folder', 'galery');
    
        const URL= `https://api.cloudinary.com/v1_1/${PUBLIC_CLOUD_NAME}/image/upload`

        const res = await axios.post(URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })

        const parseUrl = res.data.url.replace(/^http:\/\//i, "https://")
        galery.push(parseUrl)
    }

    return galery
}

export default uploadImageGalery