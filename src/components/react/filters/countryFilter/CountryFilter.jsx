import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"

const CountryFilter = ()=>{
    const [ countries,setCountries ] = useState([])
    const { escorts,getEscorts,errors,setCurrentPage,setFilterActive,filterActive } = useStore()

    useEffect(()=>{
        if(!errors && escorts.length){
            const countriesArray = escorts.map((item)=>{
                return item.country.trim()
            })
    
            const countriesNotDuplicates =  countriesArray.filter((item, index) => countriesArray.indexOf(item) === index);
            setCountries(countriesNotDuplicates)
        }
    },[escorts])

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`}
            name="country"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                getEscorts('country',event.target.value)
            }}
        >
            <option value="">PAÍS</option>
            {
                countries.map((l)=>(
                    <option key={l} value={l}>
                        {l}
                    </option>
                ))
            }
        </select>
    )
}

export default CountryFilter