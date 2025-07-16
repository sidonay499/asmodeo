import { useState } from 'react'
import './card.css'

const Card = ({item})=>{
    const {imageProfile,price,name,age,location,id} = item
    const [skeleton,setSkeleton] = useState(true)
    
    return(
        <a
            className={`container_card ${skeleton ? "skeleton" : ""}`}
            rel="noreferrer"
            target="_blank"
            aria-label={`modelo ${name} en la localidad de ${location}`}
            href={`/${name}/${id}`}
        >
            <img
                className='image_card'
                src={imageProfile}
                alt={`imagen de la modelo ${name} en la localidad de ${location}`}
                onLoad={()=>{
                    setSkeleton(!skeleton)
                }}
            />
            <span className='label_card' >{`$${price} USD`}</span>
            <div className='box_card' >
                <h2>{`${name.toUpperCase()} `}<span className='age_card' >{age}</span></h2>
                <p>{location.toUpperCase()}</p>
            </div>
        </a>
    )
}

export default Card