import { useEffect } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import './dashboard.css'
import CreateEscort from '../../forms/createEscort/CreateEscort'

const Dashboard = ()=>{

    const login = useIsLogin()
    
    useEffect(()=>{
        login()
    },[])

    return(
        <section>
            <h2>CREACIÓN DE PERFÍLES</h2>
            <CreateEscort/>
        </section>
    )
}

export default Dashboard