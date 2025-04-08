import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Dashboard from './views/dashboard/Dashboard'
import Login from './views/login/Login'
import Signin from './views/signin/Signin'

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<Dashboard/>} />
                <Route path='/admin/login' element={<Login/>} />
                <Route path='/admin/signin' element={<Signin/>} />
            </Routes>
        </BrowserRouter> 
    )
}

export default App