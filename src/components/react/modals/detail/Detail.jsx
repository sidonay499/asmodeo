import useStore from '../../../zustand/store'
import { useState } from 'react'
import './detail.css'

const Detail = ({id})=>{
    const [profile,setProfile] = useState({})
    const { escorts } = useStore()

    escorts.find((item)=>{
        if(item.id === id){
            setProfile(item)
            return
        }
    })

    return(
        <article>
            <h2>{profile.name}</h2>
        </article>
    )
}

export default Detail