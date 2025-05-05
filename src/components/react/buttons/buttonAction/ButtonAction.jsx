import Whatsapp from '../../icons/whatsapp/Whatsapp'
import './buttonAction.css'

const ButtonAction = ({phone})=>{
    return(
        <a className='button_action_box'  href="">
            HABLAR AL WHATSAPP <Whatsapp/>
        </a>
    )
}

export default ButtonAction