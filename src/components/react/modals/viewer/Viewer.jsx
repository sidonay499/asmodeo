import Cross from '../../icons/cross/Cross'
import './viewer.css'

const Viewer = ({img,closeView})=>{
    return(
        <picture className='container_viewer' >
            <div onClick={closeView} className='box_cross_viewer' >
                <Cross color={'action'} />
            </div>
            <img src={img} alt="Imágen de Escort Vip, Asmodeo Argentina" />
        </picture>
    )
}

export default Viewer