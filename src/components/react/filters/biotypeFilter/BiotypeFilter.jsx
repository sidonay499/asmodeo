import useStore from "../../../zustand/store"

const BiotypeFilter = ()=>{
    const { searchToParams } = useStore()

    return(
        <select 
            className='select_filter' 
            name="biotype"
            onChange={(event)=>searchToParams('bioType',event.target.value)}
        >
            <option value="">BIOTIPO</option>
            <option value="TONÍFICADO">TONÍFICADO</option>
            <option value="MUSCÚLOSO">MUSCÚLOSO</option>
            <option value="ATLÉTICO">ATLÉTICO</option>
            <option value="NORMAL">NORMAL</option>
        </select>
    )
}

export default BiotypeFilter