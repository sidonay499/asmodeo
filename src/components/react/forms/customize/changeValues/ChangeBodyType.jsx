import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateBodyType } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeBodyType = ({id,handleLoader,handleAlert,bodyType,gender})=>(
    <Formik
        initialValues={{
            bodyType:""
        }}
        validationSchema={validateBodyType}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { bodyType } = values
            const res = await updateProfile(id,"bodyType",bodyType)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label htmlFor="bodyType">CONTEXTURA: {bodyType}</label>
                <Field as="select" name="bodyType">
                    <option value="">ELIGE UNA CONTEXTURA</option>
                    {
                        gender === "FEMALE" ? 
                        <option value="DELGADA">DELGADA</option> : 
                        <option value="DELGADO">DELGADO</option>
                    }
                    {
                        gender === "FEMALE" ? 
                        <option value="MUY DELGADA">MUY DELGADA</option> : 
                        <option value="MUY DELGADO">MUY DELGADO</option>
                    }
                    <option value="VOLUPTUOSA">VOLUPTUOSA</option>
                    <option value="RELLENA">RELLENA</option>
                    <option value="NORMAL">NORMAL</option>
                </Field>
                <div className="box_error_change_values">
                    <ErrorMessage name="bodyType" component="div" className="error_change_values"/>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeBodyType