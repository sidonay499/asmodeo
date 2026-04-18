import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateActive } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeActive = ({id,handleLoader,handleAlert,active})=>(
    <Formik
        initialValues={{
            active:false
        }}
        validationSchema={validateActive}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { active } = values
            const res = await updateProfile(id,"active",active)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="active">USUARIO ACTIVO: {active === true ? "SI" : "NO"}</label>
                <Field as="select" name="active">
                    <option value="">CAMBIAR SI ESTADO</option>
                    {active === true ? 
                    <option value={false}>NO</option> :
                    <option value={true}>SI</option>
                    }
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="active" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeActive