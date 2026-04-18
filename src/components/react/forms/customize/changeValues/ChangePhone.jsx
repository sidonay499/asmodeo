import { ErrorMessage, Field, Form, Formik } from "formik"
import { validatePhone } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangePhone = ({id,handleLoader,handleAlert,phone})=>(
    <Formik
        initialValues={{
            phone:""
        }}
        validationSchema={validatePhone}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { phone } = values
            const res = await updateProfile(id,"phone",phone)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="phone">TELÉFONO: {phone}</label>
                <Field type="text" name="phone"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="phone" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangePhone