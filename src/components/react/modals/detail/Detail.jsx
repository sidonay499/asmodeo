import useStore from '../../../zustand/store'
import ButtonAction from '../../buttons/buttonAction/ButtonAction'
import './detail.css'

const Detail = ({id,handleDetail})=>{
    const { escorts } = useStore()

    const profile = escorts.find((item)=>{
        if(item.id === id){
            return item
        }
    })

    const {
        imageProfile,
        name,
        location,
        state,
        description,
        age,
        heigth,
        weigth,
        measures
    } = profile

    return(
        <article onClick={()=>handleDetail('')} className='container_detail' >
            <div className='box_detail' >
                <header className='header_detail' >
                    <picture>
                        <img className='image_profile_detail'  src={imageProfile} alt="" />
                    </picture>
                    <div className='container_header' >
                        <div className='box_header' >
                            <h2>{name.toUpperCase()}</h2>
                            <ButtonAction/>
                        </div>
                        <h5>{location.toUpperCase()}</h5>
                        <h5>{state.toUpperCase()}</h5>
                        <p>Hola, estoy disponible y este es mi perfil, soy de buenos aires, en la zona de palermo centro</p>
                    </div>
                </header>
                <div className='container_info_detail' >
                    <aside>
                        <h5>DETALLES PERSONALES</h5>
                        <h6>{`EDAD: ${age}`}</h6>
                        <h6>{`ALTURA: ${heigth}cm`}</h6>
                        <h6>{`PESO: ${weigth}kg`}</h6>
                        <h6>{`MEDIDAS: ${measures}`}</h6>
                    </aside>
                    <div>

                    </div>
                </div>
            </div>
        </article>
    )
}

export default Detail