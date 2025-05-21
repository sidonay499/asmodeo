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
            <option value="UNIVERSOS">UNIVERSOS</option>
            <option value="GALAXÍAS">GALAXÍAS</option>
            <option value="ESTRELLAS">ESTRELLAS</option>
            <option value="PLANETAS">PLANETAS</option>
            <option value="LUNAS">LUNAS</option>
            <option value="PÚLSARES">PÚLSARES</option>
            <option value="QUÁSARES">QUÁSARES</option>
            <option value="COMETAS">COMETAS</option>
        </select>
    )
}

export default CategoryFilter