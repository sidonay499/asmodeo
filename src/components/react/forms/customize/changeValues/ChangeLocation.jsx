import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateLocation } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeLocation = ({id,handleLoader,handleAlert,location})=>(
    <Formik
        initialValues={{
            location:""
        }}
        validationSchema={validateLocation}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { location } = values
            const res = await updateProfile(id,"location",location)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="location">LOCALIDAD: {location}</label>
                <Field type="number" name="location"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="location" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeLocation