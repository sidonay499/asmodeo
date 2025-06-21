import useStore from "../../../zustand/store"

const BiotypeFilter = ()=>{
    const { getEscorts,setCurrentPage } = useStore()

    return(
        <select 
            className='select_filter' 
            name="biotype"
            onChange={(event)=>{
                setCurrentPage(1)
                getEscorts('bioType',event.target.value)
            }}
        >
            <option value="">BIOTIPO</option>
            <option value="TONÍFICADO">TONÍFICADO</option>
            <option value="MUSCÚLOSO">MUSCÚLOSO Hombre</option>
            <option value="MUSCÚLOSA">MUSCÚLOSA Mujer</option>
            <option value="ATLÉTICO">ATLÉTICO Hombre</option>
            <option value="ATLÉTICA">ATLÉTICA Mujer</option>
            <option value="NORMAL">NORMAL</option>
        </select>
    )
}

export default BiotypeFilter