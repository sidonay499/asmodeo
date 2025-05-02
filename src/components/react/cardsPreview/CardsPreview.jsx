import Card from '../cards/Card'
import './cardsPreview.css'
import useStore from '../../zustand/store'
import Loader from '../icons/loader/Loader'
import { useEffect } from 'react'

const CardsPreview = ()=>{
    const {
        escorts,
        loading,
        errors,
        getEscorts,
    } = useStore()

    useEffect(()=>{
        if(escorts.length === 0){
            getEscorts()
        }
    },[escorts])

    return(
        <section className='container_cardsPreview' >
            {loading && <Loader size={80} />}
            {
                escorts.map((item)=>(
                    <Card item={item} key={item.name} />
                ))
            }
        </section>
    )
}

export default CardsPreview