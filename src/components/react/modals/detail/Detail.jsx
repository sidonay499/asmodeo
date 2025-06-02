import useStore from '../../../zustand/store'
import ButtonAction from '../../buttons/buttonAction/ButtonAction'
import Cross from '../../icons/cross/Cross'
import MasonryGalery from '../../masonry/MasonryGalery'
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
        images,
        name,
        location,
        state,
        phone,
        description,
        age,
        heigth,
        weigth,
        measures,
        bioType,
        bodyType,
        breasts,
        ass,
        shaved,
        tattoos,
        eyesColor,
        hairColor,
        price
    } = profile

    return(
        <article className='container_detail' >
            <div className='box_detail' >
                <div onClick={()=>handleDetail()} className='box_cross_detail' >
                    <Cross color={'white'} />
                </div>
                <header className='header_detail' >
                    <picture>
                        <img className='image_profile_detail'  src={imageProfile} alt="Escort Vip en Argentina, Asmodeo Guia Escort Vip" />
                    </picture>
                    <div className='container_header' >
                        <div className='box_header' >
                            <h2>{name.toUpperCase()}</h2>
                            <ButtonAction phone={phone} />
                        </div>
                        <h5>{location.toUpperCase()}</h5>
                        <h5>{state.toUpperCase()}</h5>
                        <p>{description}</p>
                    </div>
                </header>
                <div className='container_info_detail' >
                    <aside className='aside_detail' >
                        <div>
                            <h5>{`TARIFA: ${price}  USD`}</h5>
                        </div>
                        <div>
                            <h5>DETALLES PERSONALES</h5>
                            <h6>{`EDAD: ${age}`}</h6>
                            <h6>{`ALTURA: ${heigth}cm`}</h6>
                            <h6>{`PESO: ${weigth}kg`}</h6>
                            {measures ? <h6>{`MEDIDAS: ${measures}`}</h6> : null}
                        </div>
                        <div>
                            <h5>ATRIBUTOS FÍSICOS</h5>
                            <h6>{`BIO TIPO: ${bioType}`}</h6>
                            <h6>{`TIPO DE CUERPO: ${bodyType}`}</h6>
                            {breasts ? <h6>{`PECHOS: ${breasts}`}</h6> : null}
                            {ass ? <h6>{`COLA: ${ass}`}</h6> : null}
                            <h6>{`DEPILACIÓN: ${shaved}`}</h6>
                            <h6>{tattoos ? `TATUAJES: SI` : `TATUAJES: NO`}</h6>
                        </div>
                        <div>
                            <h5>APARIENCIA</h5>
                            <h6>{`COLOR DE OJOS: ${eyesColor}`}</h6>
                            <h6>{`COLOR DE PELO: ${hairColor}`}</h6>
                        </div>
                    </aside>
                    <div className='container_masonry' >
                        <MasonryGalery images={images} />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Detail