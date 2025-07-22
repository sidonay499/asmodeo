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
        setFilterActive,
        cleanErrors,
        setFilter
    } = useStore()

    const handleAlert = async ()=>{
        setFilter(null,null)
        setFilterActive(false)
        getEscorts()
        cleanErrors()
    }
    
    useEffect(()=>{
        getEscorts()
    },[])

    return(
        <section className='box_section_preview' id="cards-preview" >
            {loading && <Loader size={80} />}
            {errors && <Alert handleAlert={handleAlert} >{errors}</Alert>}
            <div className='container_cardsPreview' >
                {
                    !errors && escorts?.map((item)=>(
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>
            <PageNavigator/>
        </section>
    )
}

export default CardsPreview