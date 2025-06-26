import { validateInbox } from "../../../../utils/schema"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"
import createInbox from "../../../../adapters/inbox/createInbox"
import ButtonReact from "../../buttons/buttonsReact/ButtonReact"
import Loader from "../../icons/loader/Loader"
import Alert from "../../modals/alerts/Alert"
import './createInbox.css'

const CreateInbox = ({id})=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState('')

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <>
            {loader && <Loader size={80} />}
            {alert && <Alert handleAlert={handleAlert}>{alert}</Alert>}
            <Formik
                initialValues={{
                    id:id,
                    name:'',
                    message:''
                }}
                validationSchema={validateInbox}
                onSubmit={ async (values,actions)=>{
                    try {
                        setLoader(!loader)
                        const res = await createInbox(values)
                        setLoader(false)
                        setAlert(res)
                        actions.resetForm()
                    } catch (error) {
                        setLoader(false)
                        console.log(error)
                        setAlert('Ocurrió un error 🧙‍♂️')
                        actions.resetForm()
                    }   
                }}
            >
                {
                    ()=>(
                        <Form
                            className='form_inbox'
                        >
                            <Field
                                type="text"
                                name='name'
                                placeholder='NOMBRE'
                                className="input_textarea"
                            />
                            <div className='box_inbox_error' >
                                <ErrorMessage name='name' component='div' />
                            </div>
                            <Field
                                type="text"
                                as="textarea"
                                name='message'
                                placeholder='MENSAJE'
                                className="input_textarea"
                            />
                            <div className='box_inbox_error' >
                                <ErrorMessage name='message' component='div' />
                            </div>
                            <div className='box_button_inbox' >
                                <ButtonReact type='submit' >
                                    ENVIAR
                                </ButtonReact>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}

export default CreateInbox