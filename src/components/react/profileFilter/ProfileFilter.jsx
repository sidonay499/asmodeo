import { useState } from 'react'
import './profileFilter.css'
import useStore from '../../zustand/store'

const ProfileFilter = ()=>{
    const { filterGenderMale, filterGenderFemale } = useStore()
    const [position,setPosition] = useState('left')

    return(
        <aside className='aside_filter' >
            <div className='box_filter' >
                <div className='box_gender' >
                    <span className={`item item_${position}`} />
                    <div
                        onClick={()=>{
                                setPosition('rigth')
                                filterGenderMale()
                            }}
                        className='item_filter' 
                    >                        
                        <p>HOMBRE</p>
                    </div>
                    <div 
                        onClick={()=>{
                            setPosition('left')
                            filterGenderFemale()
                        }} 
                        className='item_filter' 
                    >                        
                        <p>MUJER</p>
                    </div>
                </div>
                <div className="options_filter" >
                    <label htmlFor="BIOTIPO">BIOTIPO</label>
                    <select className='select_filter' name="BIOTIPO" id="">
                        <option value="">DELGADO/A</option>
                        <option value="">VOLUPTUOSA</option>
                    </select>
                </div>
                <div className="options_filter" >
                    <label htmlFor="BIOTIPO">DEPELACIÓN</label>
                    <select className='select_filter' name="BIOTIPO" id="">
                        <option value="">FULL</option>
                        <option value="">NATURAL</option>
                    </select>
                </div>
            </div>
        </aside>
    )
}

export default ProfileFilter