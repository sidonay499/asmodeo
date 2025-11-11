import { useEffect, useRef, useState } from 'react'
import useStore from '../../zustand/store'
import Card from '../cards/card/Card'
import Loader from '../icons/loader/Loader'
import Alert from '../modals/alerts/Alert'
import './cardsPreview.css'
import getParams from '../../../adapters/escorts/getParams'

const CardsPreview = ()=>{
    const categories = ["UNIVERSE", "GALAXY", "STAR", "ECLIPSE", "EQUINOX", "MOON", "MASSAGE", "VIRTUAL"]

    const [ escorts,setEscorts ] = useState([])
    const [ nextCat, setNextCat ] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const loaderRef = useRef(null)

    const {
        loading,
        errors,
        setFilterActive,
        cleanErrors,
        setFilter,
        currentPage,
        pages,
        setCurrentPage,
    } = useStore()

    const handleAlert = async ()=>{
        setFilter(null,null)
        setFilterActive(false)
        cleanErrors()
    }

    useEffect(()=>{
        try {
            const fechtProfile = async ()=>{
                if(currentPage <= pages){
                    const data = await getParams(currentPage,'category',categories[nextCat],)
                    if(data.escorts.length){
                        setEscorts(prev => [...prev, ...data.escorts])
                    }
                    setHasMore(false)
                }
                setNextCat(nextCat + 1)
                setCurrentPage(1)
            } 
            fechtProfile()
        } catch (error) {
            console.log(error)
        }

    },[nextCat])

    console.log('state',escorts)

    useEffect(()=>{
        if(!hasMore) return

        const observer = new IntersectionObserver(
            (entries) => {
                if(entries[0].isIntersecting){
                    setCurrentPage(currentPage + 1)
                }
            },
            { threshold: 1}
        )

        if(loaderRef.current) observer.observe(loaderRef.current);
        return () => observer.disconnect();
    },[hasMore])

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
            {hasMore && (
                <div ref={loaderRef} style={{ height: "60px" }}>
                    <p className="text-center text-gray-400">Cargando más...</p>
                </div>
            )}
            {/* {
                !errors && escorts?.map((item)=>(
                    <Card item={item} key={item.id} />
                ))
            } */}
        </section>
    )
}

export default CardsPreview