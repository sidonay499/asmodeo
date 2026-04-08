import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateTattoos } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeTattoos = ({id,handleLoader,handleAlert,tattoos})=>(
    <Formik
        initialValues={{
            tattoos:false
        }}
        validationSchema={validateTattoos}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { tattoos } = values
            const res = await updateProfile(id,"tattoos",tattoos)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="tattoos">TATTOOS: {tattoos === true ? "si" : "no"}</label>
                <Field as="select" name="tattoos">
                    <option value="">CAMBIAR SI TIENE TATUAJE</option>
                    {tattoos === true ? 
                    <option value={false}>NO</option> :
                    <option value={true}>SI</option>
                    }
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="tattoos" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeTattoos