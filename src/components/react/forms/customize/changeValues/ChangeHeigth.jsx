import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateHeigth } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeHeigth = ({id,handleLoader,handleAlert,heigth})=>(
    <Formik
        initialValues={{
            heigth:""
        }}
        validationSchema={validateHeigth}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { heigth } = values
            const res = await updateProfile(id,"heigth",heigth)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="heigth">ESTÁTURA: {heigth}cm</label>
                <Field type="number" name="heigth"/>
                <div className="box_error_change_values">
                    <ErrorMessage name="heigth" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeHeigth