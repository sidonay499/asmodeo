import { useState } from 'react'
import useStore from '../../zustand/store'
import LocationFilter from '../filters/locationFilter/LocationFilter'
import AgeFilter from '../filters/ageFilter/AgeFilter'
import StateFilter from '../filters/stateFilter/StateFilter'
import CountryFilter from '../filters/countryFilter/CountryFilter'
import HairFilter from '../filters/hairFilter/HairFilter'
import EyesColor from '../filters/eyesColor/EyesColor'
import ShavedFilter from '../filters/shavedFilter/ShavedFilter'
import CategoryFilter from '../filters/categoryFilter/CaterogyFilter'
import BiotypeFilter from '../filters/biotypeFilter/BiotypeFilter'
import ArrowLeft from '../icons/navigation/ArrowLeft'
import './profileFilter.css'

const ProfileFilter = ()=>{
    const { getEscorts, setCurrentPage, setFilterActive, setFilter, filterActive } = useStore()
    const [visible,setVisible] = useState(true)
    const [position,setPosition] = useState('left')

    const handleVisible = ()=>{
        setVisible(!visible)
    }

    return(
        <aside className='aside_filter' >
            <div className={`box_filter visible_${visible}`} >
                <h2 className='title_filter' >BUSCÁ POR ZONAS Y MÁS</h2>
                <div className='boxes_fil' >
                    <div 
                        onClick={()=>{
                            setFilter(null,null)
                            setFilterActive(false)
                            setCurrentPage(1)
                            getEscorts(true)
                        }} 
                        className={filterActive ? 'box_all' : 'box_all filter-active-true'} >
                        <span>ALL</span>
                    </div>
                    <div className='box_gender' >
                        <span className={`item item_${position}`} />
                        <div
                            onClick={()=>{
                                    setFilterActive(true)
                                    setFilter('gender','MALE')
                                    setPosition('rigth')
                                    setCurrentPage(1)
                                    getEscorts()
                                }}
                            className='item_filter' 
                        >                        
                            <p>HOMBRE</p>
                        </div>
                        <div 
                            onClick={()=>{
                                setFilterActive(true)
                                setPosition('left')
                                setCurrentPage(1)
                                setFilter('gender','FEMALE')
                                getEscorts()
                            }} 
                            className='item_filter' 
                        >                        
                            <p>MUJER</p>
                        </div>
                    </div>
                    <div className="options_filter" >
                        <AgeFilter/>
                    </div>
                    <div className="options_filter" >
                        <LocationFilter/>
                    </div>
                    <div className="options_filter" >
                        <StateFilter/>
                    </div>
                    <div className="options_filter" >
                        <CountryFilter/>
                    </div>
                </div>
                <div className='boxes_fil' >
                    <div className="options_filter" >
                        <HairFilter/>
                    </div>
                    <div className="options_filter" >
                        <EyesColor/>
                    </div>
                    <div className="options_filter" >
                        <ShavedFilter/>
                    </div>
                    <div className="options_filter" >
                        <CategoryFilter/>
                    </div>
                    <div className="options_filter" >
                        <BiotypeFilter/>
                    </div>
                </div>
            </div>
            <div onClick={handleVisible} className={`visible_filter rotate_${visible}`}>
                <ArrowLeft/>
            </div>
        </aside>
    )
}

export default ProfileFilter