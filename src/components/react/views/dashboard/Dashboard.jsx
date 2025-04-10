import { useEffect } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import CreateEscort from '../../forms/createEscort/CreateEscort'
import './dashboard.css'

const Dashboard = ()=>{

    const login = useIsLogin()
    
    useEffect(()=>{
        login()
    },[])

    return(
        <section className='section_dashboard' >
            <h2>CREACIÓN DE PERFÍLES</h2>
            <CreateEscort/>
        </section>
    )
}

export default Dashboard