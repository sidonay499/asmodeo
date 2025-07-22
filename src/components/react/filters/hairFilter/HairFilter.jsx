import useStore from "../../../zustand/store"

const HairFilter = ()=>{
    const { getEscorts,setCurrentPage,filterActive,setFilterActive,setFilter } = useStore()

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`} 
            name="hairColor"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                setFilter('hairColor', event.target.value)
                getEscorts()
            }}
        >
            <option value="">COLOR DE PELO</option>
            <option value="NEGRO">NEGRO</option>
            <option value="RUBIO">RUBIO</option>
            <option value="CASTAÑO">CASTAÑO</option>
            <option value="CASTAÑO OSCURO">CASTAÑO OSCURO</option>
            <option value="RUBIO OSCURO">RUBIO OSCURO</option>
            <option value="COLORADO">COLORADO</option>
        </select>
    )
}

export default HairFilter