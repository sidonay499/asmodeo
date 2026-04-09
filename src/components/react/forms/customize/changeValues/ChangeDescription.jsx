import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateDescription } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeDescription = ({id,handleLoader,handleAlert,description})=>(
    <Formik
        initialValues={{
            description:""
        }}
        validationSchema={validateDescription}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { description } = values
            const res = await updateProfile(id,"description",description)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label className="label_description" htmlFor="description">DESCRIPCIÓN: {description}</label>
                <Field as="textarea" name="description"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="description" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeDescription