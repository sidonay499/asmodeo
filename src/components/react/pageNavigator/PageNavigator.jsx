import useStore from "../../zustand/store"
import'./pageNavigator.css'

const PageNavigator = ()=>{
    const { 
        currentPage, 
        getEscorts,
        pages, 
        setCurrentPage, 
    } = useStore()

    const fowardPage = ()=>{
        if(currentPage < pages){
            setCurrentPage(currentPage + 1)
            getEscorts()
        }
    }  

    return(
        <div className="box_navigator_handler" >
            <button
                onClick={fowardPage}
            >
                CARGAR MÁS PERFILES
            </button>
        </div>
    )
}

export default PageNavigator