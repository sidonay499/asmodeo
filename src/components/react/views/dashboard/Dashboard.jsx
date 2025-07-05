import { useEffect, useState } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import CreateEscortFemale from '../../forms/createEscort/female/CreateEscortFemale'
import './dashboard.css'
import CreateEscortMale from '../../forms/createEscort/male/CreateEscortMale'
import useStore from '../../../zustand/store'
import CardAdmin from '../../cards/cardAdmin/CardAdmin'
import PageNavigator from '../../pageNavigator/PageNavigator'

const Dashboard = ()=>{
    const { escorts,getEscorts } = useStore()
    const [item,setItem] = useState(true)
    const [gender,setGender] = useState(true)
    const login = useIsLogin()
    
    useEffect(()=>{
        login()
        getEscorts()
    },[])

    const handlerItem = ()=>{
        setItem(!item)
    }
    const handlerGender = ()=>{
        setGender(!gender)
    }

    return(
        <section className='section_dashboard' >
            <header className='header_dashboard' >
                <h2>DASHBOARD ADMINISTRADOR</h2>
                <div className='box_dashboard' >
                    <span className={`item_dashboard ${item}`} />
                    <div 
                        className='cell_options'
                        onClick={handlerItem}
                    >
                        <h6>USUARIOS</h6>
                    </div>
                    <div 
                        className='cell_options'
                        onClick={handlerItem}    
                    >
                        <h6>CREAR USUARIOS</h6>
                    </div>
                </div>
                {
                    !item && <div className={`box_dashboard`} >
                            <span className={`item_dashboard ${gender}`}  />
                            <div 
                                className='cell_options'
                                onClick={handlerGender}    
                            >
                                <h6>MUJER</h6>
                            </div>
                            <div 
                                className='cell_options'
                                onClick={handlerGender}
                            >
                                <h6>HOMBRE</h6>
                            </div>
                        </div>
                }
            </header>
            {!item ? (gender ? <CreateEscortFemale/> : <CreateEscortMale/>) : (
                <>
                    <div className='container_card' >
                        {
                            escorts.map(p => (
                                <div key={p.id}>
                                    <CardAdmin item={p} />
                                </div>
                            ))
                        }
                    </div>
                    <PageNavigator/>
                </>
            )}
        </section>
    )
}

export default Dashboard