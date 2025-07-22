import useStore from "../../../zustand/store"

const ShavedFilter = ()=>{
    const { getEscorts,setCurrentPage,filterActive,setFilterActive,setFilter } = useStore()

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`} 
            name="shaved"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                setFilter('shaved',event.target.value)
                getEscorts()
            }}
        >
            <option value="">DEPILACIÓN</option>
            <option value="FULL">FULL</option>
            <option value="PARCIAL">PARCIAL</option>
            <option value="NATURAL">NATURAL</option>
        </select>
    )
}

export default ShavedFilter