import './navbar.css'

const Navbar = ({path})=>{
    return(
        <section className='aside_navbar' >
            {path != '/' && 
            <div className='box_navbar' >
                <a href="">SOPORTE</a>
                <a href="/">
                    <img
                        className='image_navbar'
                        style={{viewTransitionName:'asmodeo'}}
                        src="./logo.svg" 
                        alt=""
                    />
                </a>
                <a href="">UNIRTE</a>
            </div>
            }
        </section>
    )
}

export default Navbar