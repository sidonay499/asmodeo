import { useEffect, useState } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import CreateEscortFemale from '../../forms/createEscort/female/CreateEscortFemale'
import './dashboard.css'
import CreateEscortMale from '../../forms/createEscort/male/CreacteEscortMale'

const Dashboard = ()=>{
    const [item,setItem] = useState(true)
    const [gender,setGender] = useState(true)
    const login = useIsLogin()
    
    useEffect(()=>{
        login()
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
            {!item ? (gender ? <CreateEscortFemale/> : <CreateEscortMale/>) : null}
        </section>
    )
}

export default Dashboard