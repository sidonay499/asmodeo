import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"

const StateFilter = ()=>{
    const [ states,setStates ] = useState([])
    const { escorts,searchToParams } = useStore()

    useEffect(()=>{
        if(escorts.length){
            const statesArray = escorts.map((item)=>{
                const tieneEspacios = /^\s|\s$/.test(item.state);
                if(tieneEspacios){
                    return item.state.trim().toUpperCase()
                }
                return item.state.toUpperCase()
            })

            const statesNotDuplicates = statesArray.filter((item, index) => statesArray.indexOf(item) === index)
            setStates(statesNotDuplicates)
        }
    },[escorts])

    return(
        <select 
            className='select_filter' 
            name="state"
            onChange={(event)=>searchToParams('state',event.target.value)}
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