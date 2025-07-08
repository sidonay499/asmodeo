import Whatsapp from '../../icons/whatsapp/Whatsapp'
import './buttonAction.css'

const ButtonAction = ({phone})=>{
    return(
        <a 
            className='button_action_box'  
            href={`https://wa.me/${phone}`}
            rel="noreferrer"
            target="_blank"
            aria-label="Hablar al whatsapp"
        >
            HABLAR AL WHATSAPP <Whatsapp/>
        </a>
    )
}

export default ButtonAction