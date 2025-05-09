import { useState } from 'react'
import './card.css'

const Card = ({item,handleDetail})=>{
    const {imageProfile,price,name,age,location} = item
    const [skeleton,setSkeleton] = useState(true)
    
    return(
        <section 
            className={`container_card ${skeleton ? "skeleton" : ""}`}
            onClick={()=>{handleDetail(item.id)}}
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
        </section>
    )
}

export default Card