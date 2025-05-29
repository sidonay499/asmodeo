import './navbar.css'

const Navbar = ({path})=>{
    return(
        <section className='aside_navbar' >
            {path != '/' && 
            <div className='box_navbar' >
                <a href="/blog" aria-label='Blog Asmodeo, Escorts Vip en Argentina' >BLOG</a>
                <a href="/" aria-label='Landing Asmodeo, Escorts Vip en Argentina' >
                    <img
                        className='image_navbar'
                        style={{viewTransitionName:'asmodeo'}}
                        src="./logo.svg" 
                        alt="Logo Asmodeo, Guía de Escorts Vip en Toda Argentina"
                    />
                </a>
                <a aria-label='Publica en Asmodeo, Escorts Vip en Argentina' href="/publica">PUBLICAR</a>
            </div>
            }
        </section>
    )
}

export default Navbar