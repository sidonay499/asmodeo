import Cross from '../../icons/cross/Cross'
import './alert.css'

const Alert = ({children,handleAlert})=>{
    return(
        <>
            <div onClick={handleAlert} className='container_alert_modal'/>
            <div className='box_alert_modal' >
                <div className='box_cross' onClick={handleAlert} >
                    <Cross color={'white'} />
                </div>
                <p>{children}</p>
            </div>
        </>
    )
}

export default Alert