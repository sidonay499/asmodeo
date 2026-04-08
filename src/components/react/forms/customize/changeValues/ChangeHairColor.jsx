import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateHairColor } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeHairColor = ({id,handleLoader,handleAlert,hairColor})=>(
    <Formik
        initialValues={{
            hairColor:""
        }}
        validationSchema={validateHairColor}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { hairColor } = values
            const res = await updateProfile(id,"hairColor",hairColor)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="hairColor">COLOR DE PELO: {hairColor}</label>
                <Field as="select" name="hairColor">
                    <option value="">ELIGE UN COLOR</option>
                    <option value="NEGRO">NEGRO</option>
                    <option value="RUBIO">RUBIO</option>
                    <option value="CASTAÑO">CASTAÑO</option>
                    <option value="CASTAÑO OSCURO">CASTAÑO OSCURO</option>
                    <option value="RUBIO OSCURO">RUBIO OSCURO</option>
                    <option value="COLORADO">COLORADO</option>
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="hairColor" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeHairColor