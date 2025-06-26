import useStore from '../../../zustand/store'
import ButtonAction from '../../buttons/buttonAction/ButtonAction'
import CreateInbox from '../../forms/inbox/CreateInbox'
import Cross from '../../icons/cross/Cross'
import MasonryGalery from '../../masonry/MasonryGalery'
import Experience from '../experience/Experience'
import './detail.css'

const Detail = ({id,handleDetail})=>{
    const { escorts } = useStore()

    const profile = escorts.find((item)=>{
        if(item.id === id){
            return item
        }
    })

    const {
        Inboxes,
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
        price,
        penis,
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
                        <div className='box_description' >
                            <p>{description}</p>
                        </div>
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
                            {penis ? <h6>{`PENE: ${penis}cm`}</h6>: null}
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
                </div >
                <div className='box_experience' >
                    <h5>{`EXPERIENCIAS CON ${name.toUpperCase()} (${Inboxes.length})`}</h5>
                    {
                        Inboxes?.map((i)=>(
                            <>
                                <Experience inbox={i} />
                            </>
                        ))
                    }
                </div>
                <div className='box_inbox' >
                    <h5>{`DEJA TU COMENTARIO A CERCA DE ${name.toUpperCase()}`}</h5>
                    <CreateInbox id={id}/>
                </div>
            </div>
        </article>
    )
}

export default Detail