import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateState } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeState = ({id,handleLoader,handleAlert,state})=>(
    <Formik
        initialValues={{
            state:""
        }}
        validationSchema={validateState}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { state } = values
            const res = await updateProfile(id,"state",state)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="state">PROVINCIA: {state}</label>
                <Field type="text" name="state"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="state" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeState