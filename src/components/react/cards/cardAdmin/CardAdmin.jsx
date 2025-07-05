import ChangeValues from '../../forms/changeValues/ChangeValues'
import './cardAdmin.css'

const CardAdmin = ({item})=>{
    const { imageProfile, name, active } = item
    const status = active ? '🟢' : '🔴'

    return(
        <div className='container_card-ad' >
            <div className='box_status' >
                <img src={imageProfile} alt={`Detalle de foto perfil de ${name} en Asmodeo.net`} />
                <p>{name}</p>
            </div>
            <div className='box_values'>
                <ChangeValues item={item} />
                <span>{status}</span>
            </div>
        </div>
    )
}

export default CardAdmin