import useStore from "../../../zustand/store"

const HairFilter = ()=>{
    const { getEscorts,setCurrentPage } = useStore()

    return(
        <select 
            className='select_filter' 
            name="hairColor"
            onChange={(event)=>{
                setCurrentPage(1)
                getEscorts('hairColor',event.target.value)
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