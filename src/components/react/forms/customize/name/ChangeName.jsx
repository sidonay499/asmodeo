import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateName } from "../../../../../utils/schema"
import "./stylesChangeName.css"

const ChangeName = ()=>(
    <Formik
        initialValues={{
            name:""
        }}
        validationSchema={validateName}
        onSubmit={()=>{}}
    >
        <Form className="form_change_name">
            <label htmlFor="name">NOMBRE</label>
            <Field type="text" name="name"/>
            <ErrorMessage name="name" component="div" className="error_change_name"/>
            <button type="submit">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeName