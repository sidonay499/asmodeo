import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateEyesColor } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeEyesColor = ({id,handleLoader,handleAlert,eyesColor})=>(
    <Formik
        initialValues={{
            eyesColor:""
        }}
        validationSchema={validateEyesColor}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { eyesColor } = values
            const res = await updateProfile(id,"eyesColor",eyesColor)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="eyesColor">COLOR DE OJOS: {eyesColor}</label>
                <Field as="select" name="eyesColor">
                    <option value="">ELIGE UN COLOR</option>
                    <option value="NEGROS">NEGROS</option>
                    <option value="AZULES">AZULES</option>
                    <option value="CELESTES">CELESTES</option>
                    <option value="VERDES">VERDES</option>
                    <option value="MARRONES">MARRONES</option>
                    <option value="CAFÉ">CAFÉ</option>
                    <option value="MARRON CLARO">MARRON CLARO</option>
                    <option value="MIEL">MIEL</option>
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="eyesColor" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeEyesColor