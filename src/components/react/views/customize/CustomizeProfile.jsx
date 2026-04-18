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
import ChangeBodyType from "../../forms/customize/changeValues/ChangeBodyType"
import ChangePrice from "../../forms/customize/changeValues/ChangePrice"
import ChangePhone from "../../forms/customize/changeValues/ChangePhone"
import ChangeLocation from "../../forms/customize/changeValues/ChangeLocation"
import ChangeDescription from "../../forms/customize/changeValues/ChangeDescription"
import ChangeState from "../../forms/customize/changeValues/ChangeState"
import ChangeCountry from "../../forms/customize/changeValues/ChangeCountry"
import ChangeBreasts from "../../forms/customize/changeValues/ChangeBreasts"
import ChangeAss from "../../forms/customize/changeValues/ChangeAss"
import ChangePenis from "../../forms/customize/changeValues/ChangePenis"
import ChangeMeasures from "../../forms/customize/changeValues/ChangeMeasures"
import ChangeActive from "../../forms/customize/changeValues/ChangeActive"

const CustomizeProfile = ()=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState(false)
    const { escorts, getEscortByAdmin } = useStore()
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
                        <picture className="customize_images_picture">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="currentColor"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
                                <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>
                            <img
                                key={index}
                                src={img}
                                alt={`gallery-${index}`}
                                className="customize_images"
                            />
                        </picture>
                        ))}
                </div>
            </div>
            <div className="input_customize" >
                <ChangeActive 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    active={profile.active}
                />
            </div>
            <div className="input_customize" >
                <ChangeName 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    name={profile.name}
                />
            </div>
            <div className="input_customize" >
                <ChangeAges 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    age={profile.age}
                />
            </div>
            <div className="input_customize" >
                <ChangeHeigth 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    heigth={profile.heigth}
                />
            </div>
            <div className="input_customize" >
                <ChangeWeigth 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    weigth={profile.weigth}
                />
            </div>
            <div className="input_customize" >
                <ChangeHairColor 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    hairColor={profile.hairColor}
                />
            </div>
            <div className="input_customize" >
                <ChangeEyesColor 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    eyesColor={profile.eyesColor}
                />
            </div>
            <div className="input_customize" >
                <ChangeShaved 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    shaved={profile.shaved}
                />
            </div>
            <div className="input_customize" >
                <ChangeCategory 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    category={profile.category}
                />
            </div>
            <div className="input_customize" >
                <ChangeTattoos 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    tattoos={profile.tattoos}
                />
            </div>
            <div className="input_customize" >
                <ChangeBodyType 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    bodyType={profile.bodyType} 
                    gender={profile.gender}
                />
            </div>
            <div className="input_customize" >
                <ChangePrice 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    price={profile.price} 
                />
            </div>
            <div className="input_customize" >
                <ChangePhone 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    phone={profile.phone} 
                />
            </div>
            <div className="input_customize" >
                <ChangeLocation 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    location={profile.location} 
                />
            </div>
            <div className="input_customize" >
                <ChangeDescription 
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    description={profile.description} 
                />
            </div>
            <div className="input_customize" >
                <ChangeState
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    state={profile.state} 
                />
            </div>
            <div className="input_customize" >
                <ChangeCountry
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    country={profile.country} 
                />
            </div>
            <div className="input_customize" >
                <ChangeBreasts
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    breasts={profile.breasts} 
                />
            </div>
            <div className="input_customize" >
                <ChangeAss
                    id={profile.id} 
                    handleLoader={handleLoader} 
                    handleAlert={setAlert} 
                    ass={profile.ass} 
                />
            </div>
            {
                profile.gender === "FEMALE" && profile.measures ? 
                <div className="input_customize" >
                    <ChangeMeasures
                        id={profile.id} 
                        handleLoader={handleLoader} 
                        handleAlert={setAlert} 
                        measures={profile.measures} 
                    />
                </div> : null
            }
            {
                profile.gender === "MALE" && profile.penis ? 
                <div className="input_customize" >
                    <ChangePenis
                        id={profile.id} 
                        handleLoader={handleLoader} 
                        handleAlert={setAlert} 
                        penis={profile.penis} 
                    />
                </div> : null
            }
        </section>
    )
}

export default CustomizeProfile