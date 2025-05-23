import './styleNavigation.css'

const ArrowLeft = ({backPage})=>{
    return(
        <span onClick={backPage} className='button_navigation' >
            <svg
                className="navigation_icons"
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                fill="none"   
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M13 20l-3 -8l3 -8" />
            </svg>
        </span>
    )
}

export default ArrowLeft