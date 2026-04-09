import { ErrorMessage, Form, Formik } from "formik"
import "./stylesCustimize.css"
import { validateEscort } from "../../../../../utils/schema"
import deleteImage from "../../../../../adapters/escorts/deleteImage"
import uploadImageProfile from "../../../../../adapters/escorts/uploadImageProfile"
import updateProfile from "../../../../../adapters/escorts/updateProfile"

const UpdateProfileImg = ({id,image,handleLoader,handleAlert})=>(
    <Formik
        initialValues={{
            imageProfile:null
        }}
        validationSchema={validateEscort}
        onSubmit={async (values,actions)=>{
            try {
                handleLoader(true)
                const formData = new FormData()
                const deleteImg = deleteImage(image)
                console.log("delete",deleteImg)
                setTimeout(()=>{
                    handleAlert("Se eliminó correctamente la imágen")
                },200)
    
                const profileImg = values.imageProfile
                const urlProfile = await uploadImageProfile(formData, profileImg)
                setTimeout(()=>{
                    handleAlert("Se guardo correctamente la imagen en la nube")
                },200)
                
                const updateDB = await updateProfile(id,'imageProfile',urlProfile)
                handleAlert(updateDB)
                handleLoader(false)
    
                actions.resetForm()
            } catch (error) {
                handleLoader(false)
                handleAlert(error.message)
                actions.resetForm()
            }
        }}
    >
        {
            ({setFieldValue})=>(
                <Form className="form_imageProfile">
                    <label htmlFor="imageProfile">CAMBIAR IMÁGEN DE PERFIL</label>
                    <input 
                        type="file"
                        name="imageProfile"
                        onChange={(event)=>{
                            const file = event.currentTarget.files[0]
                            setFieldValue('imageProfile', file)
                        }}
                    />
                    <div className="error_message_customize">
                        <ErrorMessage name="imageProfile" component="div"/>
                    </div>
                    <button type="submit">cambiar</button>
                </Form>
            )
        }
    </Formik>
)

export default UpdateProfileImg