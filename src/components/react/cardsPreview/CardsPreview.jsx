import Card from '../cards/card/Card'
import Loader from '../icons/loader/Loader'
import Alert from '../modals/alerts/Alert'
import './cardsPreview.css'
import useStore from '../../zustand/store'
import { useEffect } from 'react'

const CardsPreview = ()=>{
    const categories = ["UNIVERSE", "GALAXY", "STAR", "ECLIPSE", "EQUINOX", "MOON", "MASSAGE", "VIRTUAL"]

    const { escorts,loading,errors,cleanErrors,getEscorts } = useStore()

    const handleAlert = ()=>{
        cleanErrors()
    }

    useEffect(()=>{
        getEscorts()
    },[])
 
    return(
        <section className='box_section_preview' id="cards-preview" >
            {loading && <Loader size={80} />}
            {errors && <Alert handleAlert={handleAlert} >{errors}</Alert>}
            {
                categories.map(cat => (
                    <div className='box_cards' >
                        <h2 className='title_category' >{cat}</h2>
                        <div className='container_cardsPreview' >
                            {
                                escorts.filter(p => p.category === cat).map(p => (
                                    <Card item={p} key={p.id} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default CardsPreview