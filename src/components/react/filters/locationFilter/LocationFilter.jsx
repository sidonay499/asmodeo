import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"
import getAttributes from "../../../../adapters/escorts/getAttributes"

const LocationFilter = ()=>{
    const [ locations,setLocations ] = useState([])
    const { escorts,getEscorts,errors,setCurrentPage,setFilterActive,filterActive,setFilter } = useStore()

    useEffect(()=>{
        if(!errors && escorts.length){
            async function fechData() {
                const escorts = await getAttributes('location')
                const locationArray = escorts?.map((item)=>{
                    return item.location.trim()
                })
                
                const locationNotDuplicates = locationArray.filter((item, index) => locationArray.indexOf(item) === index);
                const locationsSorted = locationNotDuplicates.sort((a,b)=>a.localeCompare(b))

                setLocations(locationsSorted)
            }
            fechData()
        }
    },[escorts])

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`}
            name="location"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                setFilter('location', event.target.value)
                getEscorts()
            }}
        >
            <option value="">LOCALIDAD</option>
            {
                locations.map((l)=>(
                    <option key={l} value={l}>
                        {l}
                    </option>
                ))
            }
        </select>
    )
}

export default LocationFilter