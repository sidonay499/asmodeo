import { useEffect, useState } from "react"
import useStore from "../../../zustand/store"
import getAttributes from "../../../../adapters/escorts/getAttributes"

const CountryFilter = ()=>{
    const [ countries,setCountries ] = useState([])
    const { escorts,getEscorts,errors,setCurrentPage,setFilterActive,filterActive,setFilter } = useStore()

    useEffect(()=>{
        if(!errors && escorts.length){
            async function fechData() {
                const escorts = await getAttributes('country')
                const countryArray = escorts?.map((item)=>{
                    return item.country.trim()
                })
                
                const countryNotDuplicates = countryArray.filter((item, index) => countryArray.indexOf(item) === index);
                const countriesSorted = countryNotDuplicates.sort((a,b)=>a.localeCompare(b))

                setCountries(countriesSorted)
            }
            fechData()
        }
    },[escorts])

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`}
            name="country"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                setFilter('country',event.target.value)
                getEscorts()
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