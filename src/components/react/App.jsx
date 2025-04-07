import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Dashboard from './views/dashboard/Dashboard'
import Login from './views/login/Login'

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<Dashboard/>} />
                <Route path='/admin/login' element={<Login/>} />
            </Routes>
        </BrowserRouter> 
    )
}

export default App