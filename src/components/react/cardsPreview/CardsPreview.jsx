import { useEffect, useState } from 'react'
import getAllEscorts from '../../../adapters/escorts/getAllEscorts'
import Card from '../cards/Card'
import './cardsPreview.css'

const CardsPreview = ()=>{
    const [data,setData] = useState([])

    useEffect(()=>{
        console.log('entro')
        async function fetch() {
            const caracters = await getAllEscorts()
            console.log('caracters:',caracters)
            if(caracters) setData(caracters)
        }
        fetch()
    },[])

    return(
        <section className='container_cardsPreview' >
            {
                data.map((item)=>(
                    <Card item={item} key={item.name} />
                ))
            }
        </section>
    )
}

export default CardsPreview