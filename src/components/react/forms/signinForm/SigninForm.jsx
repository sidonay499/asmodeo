import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { validateAdmin } from '../../../../utils/schema'
import ButtonReact from '../../buttons/buttonsReact/ButtonReact'
import setStorage from '../../../../utils/setStorage'
import Alert from '../../modals/alerts/Alert'
import './signinForm.css'
import postAdmin from '../../../../adapters/postAdmin'
import Loader from '../../icons/loader/Loader'

const SigninForm = ()=>{
    const [loader,setLoader] = useState(false)
    const [alert, setAlert] = useState('')
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues:{
            name:'',
            surname:'',
            email:'',
            password:''
        },
        validationSchema:validateAdmin,
        onSubmit: async (values)=>{
            setLoader(!loader)
            const res = await postAdmin(values)
            console.log('res:',res)
            setLoader(false)
            if(res.name){
                setAlert(`Se creo el admin ${res.name} 👌`)
                setTimeout(()=>{
                    setStorage(res)
                    navigate('/admin')
                },6000)
            }else{
                setAlert(res)
            }
        }
    })

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <div>
            {alert && <Alert handleAlert={handleAlert} >{alert}</Alert>}
            {loader && <Loader size={80}/>}
            <form
                onSubmit={formik.handleSubmit}
                className='create_form_admin'
            >
                 <div>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="NOMBRE"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                    </div>
                    <input
                        type="text"
                        id='surname'
                        name='surname'
                        value={formik.values.surname}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="APELLIDO"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.surname && formik.errors.surname && <p>{formik.errors.surname}</p>}
                    </div>
                    <input
                        type="text"
                        id='email'
                        name='email'
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="EMAIL"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
                    </div>
                    <input
                        type="text"
                        id='password'
                        name='password'
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="PASSWORD"
                    />
                    <div className='box_signin_admin_errors' >
                        {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
                    </div>
                </div>
                <div className='box_signin_admim_button' >
                    <ButtonReact type='submit' >
                        CREAR
                    </ButtonReact>
                </div>
            </form>
        </div>
    )
}

export default SigninForm