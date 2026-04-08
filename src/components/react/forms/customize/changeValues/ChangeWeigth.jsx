import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateWeigth } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeWeigth = ({id,handleLoader,handleAlert,weigth})=>(
    <Formik
        initialValues={{
            weigth:""
        }}
        validationSchema={validateWeigth}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { weigth } = values
            const res = await updateProfile(id,"weigth",weigth)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="weigth">PESO: {weigth}kg</label>
                <Field type="number" name="weigth"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="weigth" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeWeigth