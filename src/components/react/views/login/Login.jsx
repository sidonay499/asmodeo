import { Link } from 'react-router-dom'
import LoginForm from '../../forms/loginForm/LoginForm'
import './login.css'

const Login = ()=>{
    return(
        <section className='container_login' >
            <h2>INGRESO ADMIN</h2>
            <LoginForm/>
            <div className='box_redirect' >
                <Link to={'/admin/signin'} >
                    <p className='text_redirect' >REGISTRARSE</p>
                </Link>
            </div>
        </section>
    )
}

export default Login