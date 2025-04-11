import { ping } from 'ldrs'
import './loader.css'

const Loader = ({size})=>{
    ping.register()
    return(
        <div className='load_container' >
            <l-ping
            size={size}
            speed="3" 
            color="#FFFFFF"
            >
            </l-ping>
        </div>
    )
}

export default Loader