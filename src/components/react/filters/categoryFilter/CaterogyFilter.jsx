import useStore from "../../../zustand/store"

const CategoryFilter = ()=>{
    const { getEscorts,setCurrentPage,filterActive,setFilterActive } = useStore()

    return(
        <select 
            className={`select_filter ${filterActive ? 'filter-active-true' : ''}`} 
            name="category"
            onChange={(event)=>{
                setCurrentPage(1)
                setFilterActive(true)
                getEscorts('category',event.target.value)
            }}
        >
            <option value="">CATEGORIAS</option>
            <option value="UNIVERSE">UNIVERSE</option>
            <option value="GALAXY">GALAXY</option>
            <option value="STAR">START</option>
            <option value="ECLIPSE">ECLIPSE</option>
            <option value="EQUINOX">EQUINOX</option>
            <option value="MOON">MOON</option>
            <option value="MASSAGE">MASSAGE</option>
            <option value="VIRTUAL">VIRTUAL</option>
        </select>
    )
}

export default CategoryFilter