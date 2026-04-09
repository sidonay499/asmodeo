import { ErrorMessage, Field, Form, Formik } from "formik"
import { validatePenis } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangePenis = ({id,handleLoader,handleAlert,penis})=>(
    <Formik
        initialValues={{
            penis:null
        }}
        validationSchema={validatePenis}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { penis } = values
            const res = await updateProfile(id,"penis",penis)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="penis">TAMAÑO DE PENE: {penis}cm</label>
                <Field type="number" name="penis"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="penis" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangePenis