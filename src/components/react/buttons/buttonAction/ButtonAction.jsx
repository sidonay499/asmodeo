import Whatsapp from '../../icons/whatsapp/Whatsapp'
import './buttonAction.css'

const ButtonAction = ({phone,name})=>{
    const message = `Hola ${name}, vi tu perfil en Asmodeo.net.`;
    const URL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return(
        <a 
            className='button_action_box'  
            href={URL}
            rel="noreferrer"
            target="_blank"
            aria-label="Hablar al whatsapp"
        >
            <img src="/hearts.svg" alt="Corazone en Asmodeo Escort" />
            HABLAR AL WHATSAPP <Whatsapp/>
        </a>
    )
}

export default ButtonAction