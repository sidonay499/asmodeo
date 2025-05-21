import { useState } from 'react'
import useStore from '../../zustand/store'
import LocationFilter from '../filters/locationFilter/LocationFilter'
import AgeFilter from '../filters/ageFilter/AgeFilter'
import './profileFilter.css'
import StateFilter from '../filters/stateFilter/StateFilter'
import CountryFilter from '../filters/countryFilter/CountryFilter'
import HairFilter from '../filters/hairFilter/HairFilter'
import EyesColor from '../filters/eyesColor/EyesColor'
import ShavedFilter from '../filters/shavedFilter/ShavedFilter'

const ProfileFilter = ()=>{
    const { searchToParams,cleanFilter } = useStore()
    const [position,setPosition] = useState('left')

    return(
        <aside className='aside_filter' >
            <div className='box_filter' >
                <div onClick={()=>cleanFilter} className='box_all' >
                    <span>ALL</span>
                </div>
                <div className='box_gender' >
                    <span className={`item item_${position}`} />
                    <div
                        onClick={()=>{
                                setPosition('rigth')
                                searchToParams('gender','MALE')
                            }}
                        className='item_filter' 
                    >                        
                        <p>HOMBRE</p>
                    </div>
                    <div 
                        onClick={()=>{
                            setPosition('left')
                            searchToParams('gender','FEMALE')
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
                <div className="options_filter" >
                    <HairFilter/>
                </div>
                <div className="options_filter" >
                    <EyesColor/>
                </div>
                <div className="options_filter" >
                    <ShavedFilter/>
                </div>
            </div>
        </aside>
    )
}

export default ProfileFilter