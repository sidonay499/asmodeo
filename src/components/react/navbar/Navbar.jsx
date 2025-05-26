import './navbar.css'

const Navbar = ({path})=>{
    return(
        <section className='aside_navbar' >
            {path != '/' && 
            <div className='box_navbar' >
                <a href="/blog">BLOG</a>
                <a href="/">
                    <img
                        className='image_navbar'
                        style={{viewTransitionName:'asmodeo'}}
                        src="./logo.svg" 
                        alt=""
                    />
                </a>
                <a href="/publica">PUBLICAR</a>
            </div>
            }
        </section>
    )
}

export default Navbar