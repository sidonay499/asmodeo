import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { validateLogin } from '../../../../utils/schema'
import './loginForm.css'
import setStorage from '../../../../utils/setStorage'
import sendCode from '../../../../adapters/sendCode'
import Alert from '../../modals/alerts/Alert'
import ValidateCode from '../../modals/validateCode/ValidateCode'
import Loader from '../../icons/loader/Loader'
import ButtonReact from '../../buttons/buttonsReact/ButtonReact'
import adminLogin from '../../../../adapters/adminLogin'

const LoginForm = ()=>{
    const [loader,setLoader] = useState(false)
    const [modal, setModal] = useState(false)
    const [alert, setAlert] = useState('')
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validateLogin,
        onSubmit: async (values)=>{
            setLoader(true)
            const res = await adminLogin(values)
            setLoader(false)

            if(res.name){
                setStorage(res,'admin')
                navigate('/admin')
                return
            }
            if(res === 'validate user'){
                const resCode = await sendCode()
                if(resCode.error) {
                    setAlert(resCode.error)
                    return
                }
                handleModal()
                return
            }
            setAlert('Constraseña o email incorrectos! 🤦‍♂️')
        }
    })

    const handleModal = ()=>{
        setModal(!modal)
    }

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <>
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            {
                modal && <ValidateCode
                            onSubmit={formik.handleSubmit} 
                            handleModal={handleModal} 
                            handleAlert={handleAlert} 
                            email={formik.values.email} 
                        />
            }
            <form
                onSubmit={formik.handleSubmit}
                className='login_form'
            >
                <div className='box_admin_loader' >
                    {loader && <Loader size={80} />}
                </div>
                <div className='box_login_admin_inputs' >
                    <input
                        type="text"
                        id='email'
                        name='email'
                        placeholder='EMAIL'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <div className='box_login_admin_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        placeholder='PASSWORD'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <div className='box_login_admin_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div className='box_login_admin_button' >
                    <ButtonReact type='submit'>
                        ENVIAR
                    </ButtonReact>
                </div>
            </form>
        </>
    )
}

export default LoginForm