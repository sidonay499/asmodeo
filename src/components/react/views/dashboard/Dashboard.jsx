import { useEffect } from 'react'
import useIsLogin from '../../hooks/useIsLogin'
import './dashboard.css'

const Dashboard = ()=>{

    const login = useIsLogin()
    
    useEffect(()=>{
        login()
    },[])

    return(
        <section>
            <h1>DASHBOARD</h1>
        </section>
    )
}

export default Dashboard