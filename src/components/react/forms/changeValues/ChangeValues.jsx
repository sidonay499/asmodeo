import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Loader from '../../icons/loader/Loader'
import Alert from '../../modals/alerts/Alert'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validateEscortFemale, validateEscortMale } from '../../../../utils/schema'
import './changeValues.css'
import parameters from '../../../../utils/parameters.json'

const ChangeValues = ({item})=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState('')
    const navigate = useNavigate()

    const { gender } = item
    const validate = gender === 'MALE' ? validateEscortMale : validateEscortFemale

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <>
            {loader && <Loader size={80} />}
            {alert && <Alert handleAlert={handleAlert}>{alert}</Alert>}
            <Formik
                initialValues={{
                    parameter:'',
                    value:''
                }}
                validationSchema={validate}
                onSubmit={ async (values,actions)=>{
                    try {
                        setLoader(!loader)
                        const profileRes = await createProfileMale(values)

                        setLoader(false)
                        if(profileRes.message){
                            setAlert(profileRes.message)
                        }else{
                            setAlert(profileRes)
                            if(profileRes === "jwt must be provided"){
                                setStorage('clear')
                                navigate('/admin/login')
                            }
                        }
                        actions.resetForm()
                    } catch (error) {
                        setLoader(false)
                        setAlert('Ocurrió un error 🧙‍♂️')
                        actions.resetForm()
                        console.log(error)
                    }  
                }}
            >
                {
                    ({values})=>(
                        <Form
                            className='form_change_value'
                        >
                            <div className='box_input_change' >
                                <Field
                                    as="select"
                                    id='parameter'
                                    name='parameter'
                                    className='input_change'
                                >
                                    <option value=''>PARAMETRO</option>
                                    {
                                        parameters.map(param => (
                                            <option 
                                                value={param} 
                                                key={param}
                                            >
                                                {param}
                                            </option>
                                        ))
                                    }
                                </Field>
                                <div className='box_change_error' >
                                    <ErrorMessage name={[values.parameter]} component='div' />
                                </div>
                            </div>
                            <div className='box_input_change' >
                                <Field
                                    name='value'
                                    id='value'
                                    placeholder='VALOR'
                                    className='input_change'
                                />
                                <div className='box_change_error' >
                                    <ErrorMessage name='value' component='div' />
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}

export default ChangeValues