import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"

const StateFilter = ()=>{
    const [ states,setStates ] = useState([])
    const { escorts,searchToParams } = useStore()

    useEffect(()=>{
        if(escorts.length){
            const statesArray = escorts.map((item)=>{
                return item.state
            })

            const statesNotDuplicates = [... new Set(statesArray)]
            setStates(statesNotDuplicates)
        }
    },[])

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
                        {l.toUpperCase()}
                    </option>
                ))
            }
        </select>
    )
}

export default StateFilter