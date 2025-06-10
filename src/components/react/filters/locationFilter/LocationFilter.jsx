import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"

const LocationFilter = ()=>{
    const [ locations,setLocations ] = useState([])
    const { escorts,searchToParams } = useStore()

    useEffect(()=>{
        if(escorts.length){
            const locationArray = escorts.map((item)=>{
                return item.location.trim().toUpperCase()
            })

            const locationNotDuplicates = locationArray.filter((item, index) => locationArray.indexOf(item) === index);
            setLocations(locationNotDuplicates)
        }
    },[escorts])

    return(
        <select 
            className='select_filter' 
            name="location"
            onChange={(event)=>searchToParams('location',event.target.value)}
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