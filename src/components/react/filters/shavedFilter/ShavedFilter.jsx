import useStore from "../../../zustand/store"

const ShavedFilter = ()=>{
    const { getEscorts,setCurrentPage,filterActive,setFilterActive } = useStore()

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`} 
            name="shaved"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                getEscorts('shaved',event.target.value)
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