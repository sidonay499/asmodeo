import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateCountry } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeCountry = ({id,handleLoader,handleAlert,country})=>(
    <Formik
        initialValues={{
            country:""
        }}
        validationSchema={validateCountry}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { country } = values
            const res = await updateProfile(id,"country",country)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="country">PAÍS: {country}</label>
                <Field type="text" name="country"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="country" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeCountry