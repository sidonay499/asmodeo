import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './views/dashboard/Dashboard'
import Login from './views/login/Login'
import Signin from './views/signin/Signin'
import CustomizeProfile from './views/customize/CustomizeProfile'

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<Dashboard/>} />
                <Route path='/admin/login' element={<Login/>} />
                <Route path='/admin/signin' element={<Signin/>} />
                <Route path='/admin/customize/:id' element={<CustomizeProfile/>} />
            </Routes>
        </BrowserRouter> 
    )
}

export default App