import Card from '../cards/Card'
import './cardsPreview.css'
import useStore from '../../zustand/store'
import Loader from '../icons/loader/Loader'
import { useEffect, useState } from 'react'
import Detail from '../modals/detail/Detail'
import Alert from '../modals/alerts/Alert'

const CardsPreview = ()=>{
    const [detail,serDetail] = useState('')
    const {
        escorts,
        filtered,
        loading,
        errors,
        getEscorts,
        cleanErrors,
    } = useStore()

    useEffect(()=>{
        if(escorts.length === 0){
            getEscorts()
        }
    },[filtered])

    const handleAlert = ()=>{
        cleanErrors()
    }

    const handleDetail = (id)=>{
        serDetail(id)
    }

    return(
        <section className='container_cardsPreview' >
            {loading && <Loader size={80} />}
            {errors && <Alert handleAlert={handleAlert} >{errors}</Alert>}
            {detail && <Detail handleDetail={handleDetail} id={detail}/>}
            {
                filtered.length >= 1 ? (
                    filtered.map((item)=>(
                        <Card handleDetail={handleDetail} item={item} key={item.id} />
                    ))
                ) : (
                    escorts.map((item)=>(
                        <Card handleDetail={handleDetail} item={item} key={item.id} />
                    ))
                )
            }
        </section>
    )
}

export default CardsPreview