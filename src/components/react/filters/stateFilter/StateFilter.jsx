import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"

const StateFilter = ()=>{
    const [ states,setStates ] = useState([])
    const { escorts,getEscorts,errors,setCurrentPage } = useStore()

    useEffect(()=>{
        if(!errors && escorts.length){
            const statesArray = escorts.map((item)=>{
                const tieneEspacios = /^\s|\s$/.test(item.state);
                if(tieneEspacios){
                    return item.state.trim()
                }
                return item.state
            })

            const statesNotDuplicates = statesArray.filter((item, index) => statesArray.indexOf(item) === index)
            setStates(statesNotDuplicates)
        }
    },[escorts])

    return(
        <select 
            className='select_filter' 
            name="state"
            onChange={(event)=>{
                setCurrentPage(1)
                getEscorts('state',event.target.value)
            }}
        >
            <option value="">PROVINCIA</option>
            {
                states.map((l)=>(
                    <option key={l} value={l}>
                        {l}
                    </option>
                ))
            }
        </select>
    )
}

export default StateFilter