import useStore from "../../../zustand/store"

const EyesColor = ()=>{
    const { getParameters,setCurrentPage,filterActive,setFilterActive,setFilter } = useStore()

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`} 
            name="eyesColor"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                setFilter('eyesColor', event.target.value)
                getParameters()
            }}
        >
            <option value="">COLOR DE OJOS</option>
            <option value="NEGRO">NEGRO</option>
            <option value="AZULES">AZULES</option>
            <option value="CELESTES">CELESTES</option>
            <option value="VERDES">VERDES</option>
            <option value="MARRONES">MARRONES</option>
            <option value="CAFÉ">CAFÉ</option>
            <option value="MARRON CLARO">MARRON CLARO</option>
            <option value="MIEL">MIEL</option>
        </select>
    )
}

export default EyesColor