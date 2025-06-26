import './experience.css'

const Experience = ({inbox})=>{
    return(
        <div className='container_exp' >
            <h6>{inbox.nameCustomer}</h6>
            <p>{inbox.message}</p>
        </div>
    )
}

export default Experience
