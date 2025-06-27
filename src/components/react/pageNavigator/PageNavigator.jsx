import useStore from "../../zustand/store"
import ArrowLeft from "../icons/navigation/ArrowLeft"
import ArrowRigth from "../icons/navigation/ArrowRigth"
import ArrowStart from "../icons/navigation/ArrowStart"
import ArrowEnd from "../icons/navigation/ArrrowEnd"
import'./pageNavigator.css'

const PageNavigator = ()=>{
    const { 
        currentPage, 
        getEscorts,
        pages, 
        setCurrentPage, 
        escorts 
    } = useStore()
    const limitPage = 14

    const fowardPage = ()=>{
        if(escorts.length > limitPage){
            setCurrentPage(currentPage + 1)
            getEscorts()
        }
    }

    const backPage = ()=>{
        if(currentPage >= 2){
            setCurrentPage(currentPage - 1)
            getEscorts()
        }
    }

    const startPage = ()=>{
        setCurrentPage(1)
        getEscorts()
    }   

    const endPage = ()=>{
        setCurrentPage(pages)
        getEscorts()
    }    

    return(
        <div className="box_navigator_handler" >
            <ArrowStart startPage={startPage} />
            <ArrowLeft backPage={backPage} />
            <span className="current_page" >
                {`${currentPage} DE ${pages}`}
            </span>
            <ArrowRigth fowardPage={fowardPage} />
            {<ArrowEnd endPage={endPage} />}
        </div>
    )
}

export default PageNavigator