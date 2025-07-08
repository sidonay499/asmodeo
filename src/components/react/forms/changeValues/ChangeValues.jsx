import { useEffect, useState } from 'react'
import Loader from '../../icons/loader/Loader'
import Alert from '../../modals/alerts/Alert'
import parameters from '../../../../utils/parameters.json'
import './changeValues.css'
import ButtonReact from '../../buttons/buttonsReact/ButtonReact'
import updateParam from '../../../../adapters/escorts/updateParam'

const ChangeValues = ({item})=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState('')
    const [param,setParam] = useState('')
    const [paramValue,setParamValue] = useState(null)
    const [values,setValues] = useState(null)

    const handleAlert = ()=>{
        setAlert('')
    }

    const onSubmit = async ()=>{
        setLoader(!loader)
        const res = await updateParam(param,values,item.id)
        setLoader(false)
        setAlert(res)
    }

    useEffect(()=>{
        const value = parameters.find(p => {
            const pKey = Object.keys(p).toString()
            if(param === pKey) return p
        })
        setParamValue(value)
    },[param])

    console.log(values)

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
                    {
                        paramValue && typeof paramValue[param] === 'object' && (
                            <select
                                onChange={(e)=>{
                                    setValues(e.target.value)
                                }}
                            >
                                {
                                    paramValue[param].map(v =>(
                                        <option value={v} key={v} >{v}</option>
                                    ))
                                }
                            </select>
                        )
                    }
                    {
                        paramValue && typeof paramValue[param] === 'string' && (
                            <input 
                                type="text" 
                            />
                        )
                    }
                    {
                        paramValue && typeof paramValue[param] === 'number' && (
                            <input
                                type="number" 
                            />
                        )
                    }
                    {
                        paramValue && typeof paramValue[param] === 'boolean' && (
                            <input type="checkbox" name="" id="" />
                        )
                    }
                </div>
                <ButtonReact type='submit' submit={onSubmit} >
                    CAMBIAR
                </ButtonReact>
            </form>
        </>
    )
}

export default ChangeValues