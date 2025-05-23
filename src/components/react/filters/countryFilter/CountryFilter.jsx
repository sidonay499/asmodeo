import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"

const CountryFilter = ()=>{
    const [ countries,setCountries ] = useState([])
    const { escorts,searchToParams } = useStore()

    useEffect(()=>{
        if(escorts.length){
            const countriesArray = escorts.map((item)=>{
                return item.country
            })

            const countriesNotDuplicates = [... new Set(countriesArray)]
            setCountries(countriesNotDuplicates)
        }
    },[escorts])

    return(
        <select 
            className='select_filter' 
            name="country"
            onChange={(event)=>searchToParams('country',event.target.value)}
        >
            <option value="">PAÍS</option>
            {
                countries.map((l)=>(
                    <option key={l} value={l}>
                        {l.toUpperCase()}
                    </option>
                ))
            }
        </select>
    )
}

export default CountryFilter