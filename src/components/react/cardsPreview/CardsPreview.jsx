import Card from '../cards/Card'
import './cardsPreview.css'
import useStore from '../../zustand/store'
import Loader from '../icons/loader/Loader'
import { useEffect, useState } from 'react'
import Detail from '../modals/detail/Detail'
import Alert from '../modals/alerts/Alert'
import PageNavigator from '../pageNavigator/PageNavigator'

const CardsPreview = ()=>{
    const limitPage = 14
    
    const [detail,serDetail] = useState('')
    const [page,setPage] = useState(1)
    const {
        escorts,
        filtered,
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

    const fowardPage = ()=>{
        if(escorts.length > limitPage){
            setPage(page+1)
        }
    }

    const backPage = ()=>{
        if(page >= 2){
            setPage(page - 1)
        }
    }

    const startPage = ()=>{
        setPage(1)
    }

    useEffect(()=>{
        getEscorts(page)
    },[page])

    return(
        <section className='box_section_preview' >
            {loading && <Loader size={80} />}
            {errors && <Alert handleAlert={handleAlert} >{errors}</Alert>}
            {detail && <Detail handleDetail={handleDetail} id={detail}/>}
            <div className='container_cardsPreview' >
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
            </div>
            <PageNavigator 
                page={page} 
                fowardPage={fowardPage}
                backPage={backPage}
                startPage={startPage}
            />
        </section>
    )
}

export default CardsPreview