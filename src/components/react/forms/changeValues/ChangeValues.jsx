import { useState } from 'react'
import Loader from '../../icons/loader/Loader'
import Alert from '../../modals/alerts/Alert'
import parameters from '../../../../utils/parameters.json'
import './changeValues.css'

const ChangeValues = ({item})=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState('')
    const [param,setParam] = useState('')
    const [paramValue,setParamValue] = useState(null)

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <>
            {loader && <Loader size={80} />}
            {alert && <Alert handleAlert={handleAlert}>{alert}</Alert>}
            <form
                className='form_change_value'
            >
                <div className='box_input_change' >
                    <select
                        onChange={(e)=>{
                            const key = e.target.value
                            setParam(key)
                        }}
                        className='input_change'
                    >
                        <option value=''>PARAMETRO</option>
                        {
                            parameters.map((param, index) => {
                                const key = Object.keys(param)[0];
                                return (
                                    <option value={key} key={index}>
                                        {key.toUpperCase()}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='box_input_change' >
        
                </div>
            </form>
        </>
    )
}

export default ChangeValues