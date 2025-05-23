import './styleNavigation.css'

const ArrowEnd = ()=>{
    return(
        <span className='button_navigation' >
            <svg
                className="navigation_icons"
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                fill="none"    
            >  
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 6l6 6l-6 6" />
                <path d="M17 5v13" />
            </svg>
        </span>
    )
}

export default ArrowEnd