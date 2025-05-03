import useStore from '../../../zustand/store'
import './detail.css'

const Detail = ({id,handleDetail})=>{
    const { escorts } = useStore()

    const profile = escorts.find((item)=>{
        if(item.id === id){
            return item
        }
    })

    return(
        <article onClick={()=>handleDetail('')} className='container_detail' >
            <h2>{profile.name}</h2>
        </article>
    )
}

export default Detail