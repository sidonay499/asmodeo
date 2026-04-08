import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateCategory } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeCategory = ({id,handleLoader,handleAlert,category})=>(
    <Formik
        initialValues={{
            category:""
        }}
        validationSchema={validateCategory}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { category } = values
            const res = await updateProfile(id,"category",category)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="category">CATEGORÍA: {category}</label>
                <Field as="select" name="category">
                    <option value="">ELIGE UNA CATGORÍA</option>
                    <option value="UNIVERSE">UNIVERSE</option>
                    <option value="GALAXY">GALAXY</option>
                    <option value="STAR">STAR</option>
                    <option value="ECLIPSE">ECLIPSE</option>
                    <option value="EQUINOX">EQUINOX</option>
                    <option value="MOON">MOON</option>
                    <option value="MASSAGE">MASSAGE</option>
                    <option value="VIRTUAL">VIRTUAL</option>
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="category" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeCategory