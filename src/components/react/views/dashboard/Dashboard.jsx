import { useEffect, useState } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import CreateEscort from '../../forms/createEscort/CreateEscort'
import './dashboard.css'

const Dashboard = ()=>{
    const [item,setItem] = useState(true)
    const login = useIsLogin()
    
    useEffect(()=>{
        login()
    },[])

    const handlerItem = ()=>{
        setItem(!item)
    }

    return(
        <section className='section_dashboard' >
            <header className='header_dashboard' >
                <h2>DASHBOARD ADMINISTRADOR</h2>
                <div className='box_dashboard' >
                    <span className={`item_dashboard item_rigth ${item}`} />
                    <h6 onClick={handlerItem} >USUARIOS</h6>
                    <h6 onClick={handlerItem} >CREAR USUARIOS</h6>
                </div>
            </header>
            {!item && <CreateEscort/>}
        </section>
    )
}

export default Dashboard