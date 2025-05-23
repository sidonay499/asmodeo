import './styleNavigation.css'

const ArrowRigth = ({fowardPage})=>{
    return(
        <span onClick={fowardPage} className='button_navigation' >
            <svg
                className="navigation_icons"
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                fill="none"  
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M11 4l3 8l-3 8" />
            </svg>
        </span>
    )
}

export default ArrowRigth