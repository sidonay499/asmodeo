import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateName } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeName = ({id,handleLoader,handleAlert,name})=>(
    <Formik
        initialValues={{
            name:""
        }}
        validationSchema={validateName}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { name } = values
            const res = await updateProfile(id,"name",name)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="name">NOMBRE: {name}</label>
                <Field type="text" name="name"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="name" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeName