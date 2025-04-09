import { useState } from 'react'
import { useFormik } from 'formik'
import { validateCode } from '../../../../utils/schema'
import confirmCode from '../../../../adapters/confirmCode'
import ButtonReact from '../../buttons/buttonsReact/ButtonReact'
import Loader from '../../icons/loader/Loader'
import './validateCode.css'

const ValidateCode = ({email,handleModal,onSubmit,handleAlert})=>{
    const [loader, setloader] = useState(false)

    const formik = useFormik({
        initialValues:{
            code:''
        },
        validationSchema:validateCode,
        onSubmit: async (values)=>{
            setloader(!loader)
            const res = await confirmCode(values.code)
            if(res){
                onSubmit()
                handleModal()
                return
            }
            handleAlert(res)
            handleModal()
        }
    })

    return(
        <>
            <div className="code_container" onClick={handleModal} />
            <div className="code_box" >
                <h2>VALIDA TU CODIGO</h2>
                <h3>te lo enviamos a {email}, revisa tu casilla de spam 😎</h3>
                <form
                    onSubmit={formik.handleSubmit}
                >
                    <div className="code_box_input" >
                        <input
                            type="text"
                            id="code"
                            name="code"
                            value={formik.values.code}
                            placeholder="CODIGO"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <div className="code_error" >
                            {formik.touched.code && formik.errors.code && <p>{formik.errors.code}</p>}
                        </div>
                        <div className="code_box_load" >
                            {loader && <Loader size={35} />}
                        </div>
                    </div>
                    <ButtonReact type='submit'>
                        CHECK
                    </ButtonReact>
                </form>
            </div>
        </>
    )
}

export default ValidateCode