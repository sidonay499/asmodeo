import useStore from "../../../zustand/store"

const CategoryFilter = ()=>{
    const { searchToParams } = useStore()

    return(
        <select 
            className='select_filter' 
            name="category"
            onChange={(event)=>searchToParams('category',event.target.value)}
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