import { ErrorMessage, Field, Form, Formik } from "formik"
import { validateMeasures } from "../../../../../utils/schema"
import updateProfile from "../../../../../adapters/escorts/updateProfile"
import "./stylesChangeValues.css"

const ChangeMeasures = ({id,handleLoader,handleAlert,measures})=>(
    <Formik
        initialValues={{
            breast:1,
            waist:1,
            hip:1
        }}
        validationSchema={validateMeasures}
        onSubmit={ async (values,actions)=>{
            handleLoader(true)
            const { breast,waist,hip } = values
            const res = await updateProfile(id,"measures",`${breast}-${waist}-${hip}`)
            handleLoader(false)
            handleAlert(res)
            actions.resetForm()
        }}
    >
        <Form className="form_change_values">
            <div className="box_label_change_values">
                <label>MEDIDAS: {measures}cm</label>
                <div className="container_change_measures">
                    <div className="box_input_change_measures">
                        <Field type="number" min="1" name="breast"/>
                        <div className="box_error_change_values">
                            <ErrorMessage name="breast" component="div" className="error_change_values"/>
                        </div>
                    </div>
                    <div className="box_input_change_measures">
                        <Field type="number" min="1" name="waist"/>
                        <div className="box_error_change_values">
                            <ErrorMessage name="waist" component="div" className="error_change_values"/>
                        </div>
                    </div>
                    <div className="box_input_change_measures">
                        <Field type="number" min="1" name="hip"/>
                        <div className="box_error_change_values">
                            <ErrorMessage name="hip" component="div" className="error_change_values"/>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" className="button_change_values">
                cambiar
            </button>
        </Form>
    </Formik>
)

export default ChangeMeasures