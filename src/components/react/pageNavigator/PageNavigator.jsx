import useStore from "../../zustand/store"
import'./pageNavigator.css'

const PageNavigator = ()=>{
    const { 
        currentPage, 
        getEscortByAdmin,
        pages, 
        setCurrentPage
    } = useStore()

    const fowardPage = ()=>{
        if(currentPage < pages){
            setCurrentPage(currentPage + 1)
            getEscortByAdmin()
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