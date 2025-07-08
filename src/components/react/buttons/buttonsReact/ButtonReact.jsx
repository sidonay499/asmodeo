
const ButtonReact = ({children,submit})=>{
    return(
        <button onClick={submit} >
            {children}
        </button>
    )
}

export default ButtonReact