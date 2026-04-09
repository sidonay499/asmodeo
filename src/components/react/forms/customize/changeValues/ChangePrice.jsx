import { ErrorMessage, Field, Form, Formik } from "formik"
import { validatePrice } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangePrice = ({id,handleLoader,handleAlert,price})=>(
    <Formik
        initialValues={{
            price:""
        }}
        validationSchema={validatePrice}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { price } = values
            const res = await updateProfile(id,"price",price)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="price">PRECIO: {price}</label>
                <Field type="number" name="price"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="price" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangePrice