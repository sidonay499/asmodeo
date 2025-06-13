import ArrowLeft from "../icons/navigation/ArrowLeft"
import ArrowRigth from "../icons/navigation/ArrowRigth"
import ArrowStart from "../icons/navigation/ArrowStart"
// import ArrowEnd from "../icons/navigation/ArrrowEnd"
import'./pageNavigator.css'

const PageNavigator = ({page,countPages,fowardPage,backPage,startPage})=>{
    return(
        <div className="box_navigator_handler" >
            <ArrowStart startPage={startPage} />
            <ArrowLeft backPage={backPage} />
            <span className="current_page" >
                {`${page} DE ${countPages}`}
            </span>
            <ArrowRigth fowardPage={fowardPage} />
            {/* <ArrowEnd/> */}
        </div>
    )
}

export default PageNavigator