import Card from '../cards/Card'
import './cardsPreview.css'
import useStore from '../../zustand/store'
import Loader from '../icons/loader/Loader'
import { useEffect, useState } from 'react'
import Detail from '../modals/detail/Detail'

const CardsPreview = ()=>{
    const [modal,setModal] = useState(false)
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
            {modal && <Detail/>}
            {
                escorts.map((item)=>(
                    <Card item={item} key={item.name} />
                ))
            }
        </section>
    )
}

export default CardsPreview