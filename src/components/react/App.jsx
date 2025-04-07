import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Dashboard from './views/dashboard/Dashboard'

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<Dashboard/>} />
            </Routes>
        </BrowserRouter> 
    )
}

export default App