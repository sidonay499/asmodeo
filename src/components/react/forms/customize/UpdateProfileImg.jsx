import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateEscort } from "../../../../utils/schema"
import "./stylesCustimize.css"
import updateProfile from "../../../../adapters/escorts/updateProfile"
import uploadImageProfile from "../../../../adapters/escorts/uploadImageProfile"
import setStorage from "../../../../utils/setStorage"

const UpdateProfileImg = ({id,handleLoader,handleAlert})=>(
    <Formik
        initialValues={{
            imageProfile:null
        }}
        validationSchema={validateEscort}
        onSubmit={async (values,actions)=>{
            try {
                handleLoader(true)
                const formData = new FormData()
    
                const profileImg = values.imageProfile
                const urlProfile = await uploadImageProfile(formData, profileImg)
                handleAlert("Se guardo correctamente la imagen en la nube")
                
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
                    <label htmlFor="imageProfile">CAMBIAR FOTOS GALERÍA</label>
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