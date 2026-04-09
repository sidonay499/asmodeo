import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateBreasts } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeBreasts = ({id,handleLoader,handleAlert,breasts})=>(
    <Formik
        initialValues={{
            breasts:""
        }}
        validationSchema={validateBreasts}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { breasts } = values
            const res = await updateProfile(id,"breasts",breasts)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="breasts">TAMAÑO DE PECHOS: {breasts}</label>
                <Field as="select" name="breasts">
                    <option value="">ELIGE UN ESTILO</option>
                    <option value="PEQUEÑOS">PEQUEÑOS</option>
                    <option value="PERFECTOS">PERFECTOS</option>
                    <option value="GRANDES">GRANDES</option>
                    <option value="EXTRA GRANDES">EXTRA GRANDES</option>
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="breasts" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeBreasts