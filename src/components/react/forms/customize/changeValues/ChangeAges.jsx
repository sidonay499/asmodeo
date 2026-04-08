import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateAge } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeAges = ({id,handleLoader,handleAlert,age})=>(
    <Formik
        initialValues={{
            age:""
        }}
        validationSchema={validateAge}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { age } = values
            const res = await updateProfile(id,"age",age)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="age">EDAD: {age} años</label>
                <Field type="text" name="age"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="age" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeAges