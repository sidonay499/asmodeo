import { useNavigate } from "react-router-dom";

const useIsLogin = () => {
    const navigate = useNavigate()  

    return ()=>{
        const admin = localStorage.getItem('admin')
        const parseAdmin = JSON.parse(admin)

        if(parseAdmin && parseAdmin.name){
            navigate('/admin')
            return
        }
        if(!parseAdmin){
            navigate('/admin/login')
            return
        }
    }
}

export default useIsLogin;