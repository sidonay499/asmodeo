import useStore from "../../../zustand/store"
import { useEffect, useState } from "react"
import '../index.css'

const AgeFilter = ()=>{
    const { getEscorts,setCurrentPage,filterActive,setFilterActive, setFilter } = useStore()
    const [ages,setAges] = useState([])
    const minAge = 18
    const maxAge = 100
    
    useEffect(()=>{
        const arrayAge = []
        for (let i = minAge; i <= maxAge; i++){
            arrayAge.push(i)
        }
        setAges(arrayAge)
    },[])

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`}
            name="age"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilter('age',event.target.value)
                setFilterActive(true)
                getEscorts()
            }}
        >
            <option value="">EDAD</option>
            {
                ages.map((age) => (
                    <option key={age} value={age}>
                        {age}
                    </option>
                ))
            }
        </select>
    )
}

export default AgeFilter