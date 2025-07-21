import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"

const LocationFilter = ()=>{
    const [ locations,setLocations ] = useState([])
    const { escorts,getEscorts,errors,setCurrentPage,setFilterActive,filterActive } = useStore()

    useEffect(()=>{
        if(!errors && escorts.length){
            const locationArray = escorts.map((item)=>{
                return item.location.trim()
            })

            const locationNotDuplicates = locationArray.filter((item, index) => locationArray.indexOf(item) === index);
            setLocations(locationNotDuplicates)
        }
    },[escorts])

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`}
            name="location"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                getEscorts('location',event.target.value)
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