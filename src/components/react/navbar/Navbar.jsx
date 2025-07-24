import './navbar.css'

const Navbar = ()=>{
    return(
        <section className='aside_navbar' >
            <div className='box_navbar' >
                <a href="/" aria-label='Landing Asmodeo, Escorts Vip en Argentina' >
                    <img
                        className='image_navbar'
                        style={{viewTransitionName:'asmodeo'}}
                        src="/logo.svg" 
                        alt="Logo Asmodeo, Guía de Escorts Vip en Toda Argentina"
                    />
                </a>
                <div>
                    <a aria-label='Publica en Asmodeo, Escorts Vip en Argentina' href="/publica">PUBLICAR</a>
                    <a href="/blog" aria-label='Blog Asmodeo, Escorts Vip en Argentina' >BLOG</a>
                </div>
            </div>
        </section>
    )
}

export default Navbar