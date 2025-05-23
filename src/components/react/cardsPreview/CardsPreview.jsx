import Card from '../cards/Card'
import './cardsPreview.css'
import useStore from '../../zustand/store'
import Loader from '../icons/loader/Loader'
import { useEffect, useState } from 'react'
import Detail from '../modals/detail/Detail'
import Alert from '../modals/alerts/Alert'
import PageNavigator from '../pageNavigator/PageNavigator'

const CardsPreview = ()=>{
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

    useEffect(()=>{
        if(escorts.length === 0){
            getEscorts(page)
        }
    },[filtered,page])

    const handleAlert = ()=>{
        cleanErrors()
    }

    const handleDetail = (id)=>{
        serDetail(id)
    }

    const fowardPage = ()=>{
        if(escorts.length > 14){
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

    return(
        <section>
            <div className='container_cardsPreview' >
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