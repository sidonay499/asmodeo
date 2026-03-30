import { Link, useParams } from "react-router-dom"
import useStore from "../../../zustand/store"
import "./customizeProfile.css"
import ArrowLeft from "../../icons/navigation/ArrowLeft"
import { useState } from "react"
import Loader from "../../icons/loader/Loader"
import Alert from "../../modals/alerts/Alert"
import ChangeName from "../../forms/customize/name/ChangeName"
import UpdateProfileImg from "../../forms/customize/imageProfile/UpdateProfileImg"

const CustomizeProfile = ()=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState(false)
    const { escorts } = useStore()
    const { id } = useParams()
    const profile = escorts.find(p => {
        if(p.id === id) return p
    })
    const image = profile.imageProfile.split("/").pop().replace(".webp","")
    
    const handleAlert = ()=>{
        setAlert("")
    }
    const handleLoader = (state)=>{
        setLoader(state)
    }

    return(
        <section className="form_customize">
            {loader && <Loader size={80} />}
            {alert && <Alert handleAlert={handleAlert}>{alert}</Alert>}
            <div className="box_navigation_customize">
                <Link to={"/admin"}>
                    <ArrowLeft/>
                </Link>
                <p>volver a dashboard</p>
            </div>
            <div className="box_input_customize">
                <img className="customize_img_profile" src={profile.imageProfile} alt={profile.name} />
                <div className="input_customize" >
                    <UpdateProfileImg id={profile.id} image={image} handleLoader={handleLoader} handleAlert={setAlert}/>
                </div>
            </div>
            <div className="box_input_customize">
                <div className="container_images_custom">
                    {profile?.images?.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`gallery-${index}`}
                                className="customize_images"
                            />
                        ))}
                </div>
                <div className="input_customize" >
                </div>
            </div>
            <div className="box_input_customize">
                <h2>{profile.name}</h2>
                <div className="input_customize" >
                    <ChangeName/>
                </div>
            </div>
        </section>
    )
}

export default CustomizeProfile