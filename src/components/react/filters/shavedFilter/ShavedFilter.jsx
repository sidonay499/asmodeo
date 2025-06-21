import useStore from "../../../zustand/store"

const ShavedFilter = ()=>{
    const { getEscorts,setCurrentPage } = useStore()

    return(
        <select 
            className='select_filter' 
            name="shaved"
            onChange={(event)=>{
                setCurrentPage(1)
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