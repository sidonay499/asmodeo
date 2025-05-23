import './styleNavigation.css'

const ArrowStart = ({startPage})=>{
    return(
        <span onClick={startPage} className='button_navigation' >
            <svg
                className="navigation_icons"
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                fill="none"  
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 6v12" />
                <path d="M18 6l-6 6l6 6" />
            </svg>
        </span>
    )
}

export default ArrowStart