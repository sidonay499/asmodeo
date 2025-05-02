import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './react/views/dashboard/Dashboard'
import Login from './react/views/login/Login'
import Signin from './react/views/signin/Signin'
import Detail from './react/modals/detail/Detail'

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