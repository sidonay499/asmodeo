import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateAss } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeAss = ({id,handleLoader,handleAlert,ass})=>(
    <Formik
        initialValues={{
            ass:""
        }}
        validationSchema={validateAss}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { ass } = values
            const res = await updateProfile(id,"ass",ass)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="ass">TAMAÑO DE COLA: {ass}</label>
                <Field as="select" name="ass">
                    <option value="">ELIGE UN ESTILO</option>
                    <option value="CHICA">CHICA</option>
                    <option value="PERFECTA">PERFECTA</option>
                    <option value="GRANDE">GRANDE</option>
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="ass" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeAss