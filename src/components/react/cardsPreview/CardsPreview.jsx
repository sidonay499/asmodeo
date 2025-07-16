import { useEffect } from 'react'
import useStore from '../../zustand/store'
import PageNavigator from '../pageNavigator/PageNavigator'
import Card from '../cards/card/Card'
import Loader from '../icons/loader/Loader'
import Alert from '../modals/alerts/Alert'
import './cardsPreview.css'

const CardsPreview = ()=>{
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

    useEffect(()=>{
        getEscorts()
    },[errors])

    return(
        <section className='box_section_preview' >
            {loading && <Loader size={80} />}
            {errors && <Alert handleAlert={handleAlert} >{errors}</Alert>}
            <div className='container_cardsPreview' >
                {
                    !errors && escorts.map((item)=>(
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>
            <PageNavigator/>
        </section>
    )
}

export default CardsPreview