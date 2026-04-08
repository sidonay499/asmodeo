import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateShaved } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeShaved = ({id,handleLoader,handleAlert,shaved})=>(
    <Formik
        initialValues={{
            shaved:""
        }}
        validationSchema={validateShaved}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { shaved } = values
            const res = await updateProfile(id,"shaved",shaved)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="shaved">DEPILACIÓN: {shaved}</label>
                <Field as="select" name="shaved">
                    <option value="">ELIGE UN ESTILO</option>
                    <option value="FULL">FULL</option>
                    <option value="PARCIAL">PARCIAL</option>
                    <option value="NATURAL">NATURAL</option>
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="shaved" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeShaved