import { ping } from 'ldrs'

const Loader = ({size})=>{
    ping.register()
    return(
        <>
            <l-ping
            size={size}
            speed="3" 
            color="#3d3d3d" 
            ></l-ping>
        </>
    )
}

export default Loader