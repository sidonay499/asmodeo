import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validateEscortMale } from '../../../../../utils/schema'
import { useState } from 'react'
import uploadImageProfile from '../../../../../adapters/escorts/uploadImageProfile'
import uploadImageGalery from '../../../../../adapters/escorts/uploadImageGalery'
import ButtonReact from '../../../buttons/buttonsReact/ButtonReact'
import Loader from '../../../icons/loader/Loader'
import Alert from '../../../modals/alerts/Alert'
import updateProfile from '../../../../../adapters/escorts/updateProfile'
import setStorage from '../../../../../utils/setStorage'
import { useNavigate } from 'react-router-dom'
import createProfile from '../../../../../adapters/escorts/createProfile'
import './createEscortMale.css'

const CreateEscortMale = ()=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState('')
    const navigate = useNavigate()

    const handleAlert = ()=>{
        setAlert('')
    }

    return(
        <>
            {loader && <Loader size={80} />}
            {alert && <Alert handleAlert={handleAlert}>{alert}</Alert>}
            <Formik
                initialValues={{
                    imageProfile:null,
                    images:[],
                    name:'',
                    age:'',
                    heigth:'',
                    weigth:'',
                    penis:false,
                    hairColor:false,
                    eyesColor:false,
                    shaved:false,
                    bodyType:false,
                    bioType:false,
                    tattoos:false,
                    description:'',
                    price:'',
                    phone:'',
                    location:'',
                    state:'',
                    country:'',
                    category:false
                }}
                validationSchema={validateEscortMale}
                onSubmit={ async (values,actions)=>{
                    try {
                        setLoader(!loader)
                        const formData = new FormData()
                        const profileImg = values.imageProfile
                        const galeryImgs = values.images
                        const profileRes = await createProfile(values,'MALE')

                        if(profileRes.success){
                            const urlProfile = await uploadImageProfile(formData, profileImg)
                            const urlsGalery = await uploadImageGalery(formData,galeryImgs)
    
                            await updateProfile(profileRes.id,'imageProfile',urlProfile)
                            await updateProfile(profileRes.id,'images',urlsGalery)
                        }

                        setLoader(false)
                        if(profileRes.message){
                            setAlert(profileRes.message)
                        }else{
                            setAlert(profileRes)
                            if(profileRes === "jwt must be provided"){
                                setStorage('clear')
                                navigate('/admin/login')
                            }
                        }
                        actions.resetForm()
                    } catch (error) {
                        setLoader(false)
                        setAlert('Ocurrió un error 🧙‍♂️')
                        actions.resetForm()
                        console.log(error)
                    }  
                }}
            >
                {
                    ({setFieldValue, values})=>(
                        <Form
                            className='form_create_escort'
                        >
                              <div className='box_inputs' >
                                <h4>DATOS PERSONALES</h4>
                                <Field
                                    type="text"
                                    name='name'
                                    placeholder='NOMBRE'
                                />
                                <div className='box_create_escort_error' >
                                    <ErrorMessage name='name' component='div' />
                                </div>
                                <Field
                                    type="number"
                                    name='age'
                                    placeholder='EDAD'
                                />
                                <div className='box_create_escort_error' >
                                    <ErrorMessage name='age' component='div' />
                                </div>
                                <Field
                                    type="text"
                                    name='location'
                                    placeholder='LOCALIDAD'
                                />
                                <div className='box_create_escort_error' >
                                    <ErrorMessage name='location' component='div' />
                                </div>
                                <Field
                                    type="text"
                                    name='state'
                                    placeholder='PROVINCIA'
                                />
                                <div className='box_create_escort_error' >
                                    <ErrorMessage name='state' component='div' />
                                </div>
                                <Field
                                    type="text"
                                    name='country'
                                    placeholder='PAÍS'
                                />
                                <div className='box_create_escort_error' >
                                    <ErrorMessage name='country' component='div' />
                                </div>
                                <Field
                                    type="text"
                                    name='phone'
                                    placeholder='TELÉFONO'
                                />
                                <div className='box_create_escort_error' >
                                    <ErrorMessage name='phone' component='div' />
                                </div>
                                <div className='box_measures' >
                                    <h4>MEDIDAS</h4>
                                    <Field
                                        type="number"
                                        name='heigth'
                                        placeholder='ESTATURA'
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='heigth' component='div' />
                                    </div>
                                    <Field
                                        type="number"
                                        name='weigth'
                                        placeholder='PESO'
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='weigth' component='div' />
                                    </div>
                                    <Field
                                        type="number"
                                        name='penis'
                                        placeholder='PENE'
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='penis' component='div' />
                                    </div>
                                    <Field
                                        as="textarea"
                                        id="description"
                                        name='description'
                                        placeholder='DESCRIPCIÓN'
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='description' component='div' />
                                    </div>
                                </div>
                            </div>
                            <div className='box_select' >
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="hairColor"
                                        id="hairColor"
                                    >
                                        <option value="">COLOR DE PELO</option>
                                        <option value="NEGRO">NEGRO</option>
                                        <option value="RUBIO">RUBIO</option>
                                        <option value="CASTAÑO">CASTAÑO</option>
                                        <option value="CASTAÑO OSCURO">CASTAÑO OSCURO</option>
                                        <option value="RUBIO OSCURO">RUBIO OSCURO</option>
                                        <option value="COLORADO">COLORADO</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='hairColor' component='div' />
                                    </div>
                                </div>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="eyesColor"
                                        id="eyesColor"
                                    >
                                        <option value="">COLOR DE OJOS</option>
                                        <option value="NEGRO">NEGRO</option>
                                        <option value="AZULES">AZULES</option>
                                        <option value="CELESTES">CELESTES</option>
                                        <option value="VERDES">VERDES</option>
                                        <option value="MARRONES">MARRONES</option>
                                        <option value="CAFÉ">CAFÉ</option>
                                        <option value="MARRON CLARO">MARRON CLARO</option>
                                        <option value="MIEL">MIEL</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='eyesColor' component='div' />
                                    </div>
                                </div>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="shaved"
                                        id="shaved"
                                    >
                                        <option value="">DEPILACION</option>
                                        <option value="FULL">FULL</option>
                                        <option value="PARCIAL">PARCIAL</option>
                                        <option value="NATURAL">NATURAL</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='shaved' component='div' />
                                    </div>
                                </div>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="bodyType"
                                        id="bodyType"
                                    >
                                        <option value="">CONTEXTURA</option>
                                        <option value="DELGADO">DELGADO</option>
                                        <option value="MUY DELGADO">MUY DELGADO</option>
                                        <option value="RELLENO">RELLENO</option>
                                        <option value="NORMAL">NORMAL</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='bodyType' component='div' />
                                    </div>
                                </div>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="category"
                                        id="category"
                                    >
                                        <option value="">CATEGORIA</option>
                                        <option value="UNIVERSE">UNIVERSE</option>
                                        <option value="GALAXY">GALAXY</option>
                                        <option value="STAR">STAR</option>
                                        <option value="ECLIPSE">ECLIPSE</option>
                                        <option value="EQUINOX">EQUINOX</option>
                                        <option value="MOON">MOON</option>
                                        <option value="MASSAGE">MASSAGE</option>
                                        <option value="VIRTUAL">VIRTUAL</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='category' component='div' />
                                    </div>
                                </div>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="bioType"
                                        id="bioType"
                                    >
                                        <option value="">BIOTIPO</option>
                                        <option value="TONÍFICADO">TONÍFICADO</option>
                                        <option value="MUSCÚLOSO">MUSCÚLOSO</option>
                                        <option value="ATLÉTICO">ATLÉTICO</option>
                                        <option value="NORMAL">NORMAL</option>
                                    </Field> 
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='bioType' component='div' />
                                    </div>
                                </div>
                                <div className='box_input_image' >
                                    <label htmlFor="imageProfile">IMAGEN DE PERFIL</label>
                                    <input 
                  
                                        type="file"
                                        name="imageProfile"
                                        onChange={(event)=>{
                                            const file = event.currentTarget.files[0]
                                            setFieldValue('imageProfile', file)
                                        }}
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='imageProfile' component='div' />
                                    </div>
                                    <label htmlFor="images">IMÁGENES PARA GALERÍA</label>
                                    <input
                                        type="file"
                                        name="images"
                                        multiple
                                        onChange={(event)=>{
                                            const file = event.currentTarget.files
                                            setFieldValue('images', file)
                                        }}
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='imageProfile' component='div' />
                                    </div>
                                </div>
                                <Field
                                    className='measures_input input_price'
                                    type="number"
                                    name="price"
                                    placeholder='PRECIO'
                                />
                                <div className='box_create_escort_error' >
                                    <ErrorMessage name='price' component='div' />
                                </div>
                                <div className='box_checkbox' >
                                    <Field
                                        type="checkbox"
                                        name="tattoos"
                                        onChange={()=>{
                                            setFieldValue('tattoos',!values.tattoos)
                                        }}
                                    />
                                    <label htmlFor="tattoos">TATUAJES</label>
                                </div>
                                <div className='box_button_create_escort' >
                                    <ButtonReact type='submit' >
                                        CREAR PERFIL
                                    </ButtonReact>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}

export default CreateEscortMale