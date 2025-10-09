import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"
import getAttributes from "../../../../adapters/escorts/getAttributes"

const StateFilter = ()=>{
    const [ states,setStates ] = useState([])
    const { getParameters,setCurrentPage,filterActive,setFilterActive,setFilter } = useStore()

    useEffect(()=>{
        async function fechData() {
            const escorts = await getAttributes('state')
            const stateArray = escorts?.map((item)=>{
                return item.state.trim()
            })
            
            const stateNotDuplicates = stateArray.filter((item, index) => stateArray.indexOf(item) === index);
            const statesSorted = stateNotDuplicates.sort((a,b)=>a.localeCompare(b))

            setStates(statesSorted)
        }
        fechData()
    },[])

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`}
            name="state"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                setFilter('state',event.target.value)
                getParameters()
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