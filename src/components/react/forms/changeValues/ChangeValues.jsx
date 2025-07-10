import { useEffect, useState } from 'react'
import Loader from '../../icons/loader/Loader'
import Alert from '../../modals/alerts/Alert'
import parameters from '../../../../utils/parameters.json'
import './changeValues.css'
import ButtonReact from '../../buttons/buttonsReact/ButtonReact'
import translations from '../../../../utils/translations'
import updateProfile from '../../../../adapters/escorts/updateProfile'

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
        try {
            setLoader(!loader)
            await updateProfile(item.id,param,values)
            setLoader(false)
            setTimeout(()=>{
                setAlert('Se actualizo con exito')
            },6000)
        } catch (error) {
            setTimeout(()=>{
                setAlert('ocurrio un error')
            },6000)
        }
    }

    useEffect(()=>{
        const value = parameters.find(p => {
            const pKey = Object.keys(p).toString()
            if(param === pKey) return p
        })
        setParamValue(value)
    },[param])

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
                                        {translations(key)}
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
                                onChange={(e)=>setValues(e.target.value)}
                            />
                        )
                    }
                    {
                        paramValue && typeof paramValue[param] === 'number' && (
                            <input
                                type="number" 
                                onChange={(e)=>setValues(e.target.value)}
                            />
                        )
                    }
                    {
                        paramValue && typeof paramValue[param] === 'boolean' && (
                            <select onChange={(e)=>setValues(e.target.value)} name="" id="">
                                <option value={true}>TRUE</option>
                                <option value={false}>FALSE</option>
                            </select>
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