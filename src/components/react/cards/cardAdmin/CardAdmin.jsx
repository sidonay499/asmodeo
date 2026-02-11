import { Link } from 'react-router-dom'
import './cardAdmin.css'

const CardAdmin = ({item})=>{
    const { imageProfile, name, active, id, age, location, state, phone, price } = item
    const status = active ? '🟢' : '🔴'

    return(
        <div className='container_card-ad' >
            <Link to={`/admin/customize/${id}`}>
                <div className='box_status' >
                    <span>{status}</span>
                    <img src={imageProfile} alt={`Detalle de foto perfil de ${name} en Asmodeo.net`} />
                    <p>{`${name} (${age})`}</p>
                    <p>{phone}</p>
                    <p>{location}</p>
                    <p>{state}</p>
                    <h4>{`$${price}`}</h4>
                </div>
            </Link>
        </div>
    )
}

export default CardAdmin