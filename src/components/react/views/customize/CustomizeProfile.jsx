import { Link, useParams } from "react-router-dom"
import useStore from "../../../zustand/store"
import "./customizeProfile.css"
import ArrowLeft from "../../icons/navigation/ArrowLeft"
import { useEffect, useState } from "react"
import Loader from "../../icons/loader/Loader"
import Alert from "../../modals/alerts/Alert"
import ChangeName from "../../forms/customize/changeValues/ChangeName"
import UpdateProfileImg from "../../forms/customize/imageProfile/UpdateProfileImg"
import ChangeAges from "../../forms/customize/changeValues/ChangeAges"
import ChangeHeigth from "../../forms/customize/changeValues/ChangeHeigth"
import ChangeWeigth from "../../forms/customize/changeValues/ChangeWeigth"
import ChangeHairColor from "../../forms/customize/changeValues/ChangeHairColor"
import ChangeEyesColor from "../../forms/customize/changeValues/ChangeAyesColor"
import ChangeShaved from "../../forms/customize/changeValues/ChangeShaved"
import ChangeCategory from "../../forms/customize/changeValues/ChangeCategory"
import ChangeTattoos from "../../forms/customize/changeValues/ChangeTattoos"

const CustomizeProfile = ()=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState(false)
    const { escorts, getEscortByAdmin } = useStore()
    const { id } = useParams()
    const profile = escorts.find(p => {
        if(p.id === id) return p
    })
    console.log()
    const image = profile.imageProfile.split("/").pop().replace(".webp","")
    
    const handleAlert = ()=>{
        setAlert("")
    }
    const handleLoader = (state)=>{
        setLoader(state)
    }

    useEffect(()=>{
        getEscortByAdmin()
    },[alert])

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
            </div>
            <div className="input_customize" >
                <ChangeName id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} name={profile.name}/>
            </div>
            <div className="input_customize" >
                <ChangeAges id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} age={profile.age}/>
            </div>
            <div className="input_customize" >
                <ChangeHeigth id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} heigth={profile.heigth}/>
            </div>
            <div className="input_customize" >
                <ChangeWeigth id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} weigth={profile.weigth}/>
            </div>
            <div className="input_customize" >
                <ChangeHairColor id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} hairColor={profile.hairColor}/>
            </div>
            <div className="input_customize" >
                <ChangeEyesColor id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} eyesColor={profile.eyesColor}/>
            </div>
            <div className="input_customize" >
                <ChangeShaved id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} shaved={profile.shaved}/>
            </div>
            <div className="input_customize" >
                <ChangeCategory id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} category={profile.category}/>
            </div>
            <div className="input_customize" >
                <ChangeTattoos id={profile.id} handleLoader={handleLoader} handleAlert={setAlert} tattoos={profile.tattoos}/>
            </div>
        </section>
    )
}

export default CustomizeProfile