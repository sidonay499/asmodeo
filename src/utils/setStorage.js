const setStorage = (values)=>{
    if(values !== 'clear'){
        const admin = JSON.stringify(
            {
                values,
                isValidateLogin:true
            }
        )
        localStorage.setItem('admin',admin)
        return
    }
    localStorage.clear()
}

export default setStorage