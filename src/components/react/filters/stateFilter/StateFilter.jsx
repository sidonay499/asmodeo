import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"

const StateFilter = ()=>{
    const [ states,setStates ] = useState([])
    const { escorts,getEscorts,errors,setCurrentPage,filterActive,setFilterActive,setFilter } = useStore()

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
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`}
            name="state"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                setFilter('state',event.target.value)
                getEscorts()
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