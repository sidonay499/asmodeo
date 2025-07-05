import { useEffect, useState } from 'react'
import useStore from '../../zustand/store'
import PageNavigator from '../pageNavigator/PageNavigator'
import Card from '../cards/card/Card'
import Loader from '../icons/loader/Loader'
import Detail from '../modals/detail/Detail'
import Alert from '../modals/alerts/Alert'
import './cardsPreview.css'

const CardsPreview = ()=>{
    const [detail,serDetail] = useState('')
    const {
        escorts,
        loading,
        errors,
        getEscorts,
        cleanErrors,
    } = useStore()

    const handleAlert = ()=>{
        cleanErrors()
    }

    const handleDetail = (id)=>{
        serDetail(id)
    }

    useEffect(()=>{
        getEscorts()
    },[errors])

    return(
        <section className='box_section_preview' >
            {loading && <Loader size={80} />}
            {errors && <Alert handleAlert={handleAlert} >{errors}</Alert>}
            {detail && <Detail handleDetail={handleDetail} id={detail}/>}
            <div className='container_cardsPreview' >
                {
                    !errors && escorts.map((item)=>(
                        <Card handleDetail={handleDetail} item={item} key={item.id} />
                    ))
                }
            </div>
            <PageNavigator/>
        </section>
    )
}

export default CardsPreview