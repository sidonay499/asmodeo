import { Field, Formik, Form, ErrorMessage } from 'formik'
import ButtonReact from '../../../buttons/buttonsReact/ButtonReact'
import { validateEscortFemale } from '../../../../../utils/schema'
import { useState } from 'react'
import uploadImageProfile from '../../../../../adapters/escorts/uploadImageProfile'
import uploadImageGalery from '../../../../../adapters/escorts/uploadImageGalery'
import createProfileFemale from '../../../../../adapters/escorts/createProfileFemale'
import Loader from '../../../icons/loader/Loader'
import './createEscortFemale.css'
import Alert from '../../../modals/alerts/Alert'

const CreateEscortFemale = ()=>{
    const [loader,setLoader] = useState(false)
    const [alert,setAlert] = useState('')

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
                    hairColor:false,
                    eyesColor:false,
                    shaved:false,
                    breast:'',
                    waist:'',
                    hip:'',
                    gender:false,
                    bodyType:false,
                    breasts:false,
                    ass:false,
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
                validationSchema={validateEscortFemale}
                onSubmit={ async (values,actions)=>{
                    try {
                        setLoader(!loader)
                        const formData = new FormData()
                        const profileImg = values.imageProfile
                        const galeryImgs = values.images

                        const urlProfile = await uploadImageProfile(formData, profileImg)
                        const urlsGalery = await uploadImageGalery(formData,galeryImgs)
                        console.log('images', urlProfile,urlsGalery)

                        const profileRes = await createProfileFemale(values,urlProfile,urlsGalery)
                        setLoader(false)
                        setAlert(profileRes)
                        actions.resetForm()
                        console.log('resprofile', profileRes)
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
                                        className='measures_input'
                                        type="number"
                                        name="breast"
                                        id="breast"
                                        placeholder='PECHOS'
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='breast' component='div' />
                                    </div>
                                    <Field
                                        className='measures_input'
                                        type="number"
                                        name="waist"
                                        id="waist"
                                        placeholder='CINTURA'
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='waist' component='div' />
                                    </div>
                                    <Field
                                        className='measures_input'
                                        type="number"
                                        name="hip"
                                        id="hip"
                                        placeholder='CADERA'
                                    />
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='hip' component='div' />
                                    </div>
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
                                <label htmlFor="eyesColor">COLOR DE OJOS</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="eyesColor"
                                        id="eyesColor"
                                    >
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
                                <label htmlFor="shaved">DEPILACIÓN</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="shaved"
                                        id="shaved"
                                    >
                                        <option value="FULL">FULL</option>
                                        <option value="PARCIAL">PARCIAL</option>
                                        <option value="NATURAL">NATURAL</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='shaved' component='div' />
                                    </div>
                                </div>
                                <label htmlFor="bodyType">CONTEXTURA</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="bodyType"
                                        id="bodyType"
                                    >
                                        <option value="DELGADA">DELGADA</option>
                                        <option value="MUY DELGADA">MUY DELGADA</option>
                                        <option value="VOLUPTUOSA">VOLUPTUOSA</option>
                                        <option value="RELLENA">RELLENA</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='bodyType' component='div' />
                                    </div>
                                </div>
                                <label htmlFor="breasts">PECHOS</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="breasts"
                                        id="breasts"
                                    >
                                        <option value="PEQUEÑOS">PEQUEÑOS</option>
                                        <option value="PERFECTOS">PERFECTOS</option>
                                        <option value="GRANDES">GRANDES</option>
                                        <option value="EXTRA GRANDES">EXTRA GRANDES</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='breasts' component='div' />
                                    </div>
                                </div>
                                <label htmlFor="ass">COLA</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="ass"
                                        id="ass"
                                    >
                                        <option value="CHICA">CHICA</option>
                                        <option value="PERFECTA">PERFECTA</option>
                                        <option value="GRANDE">GRANDE</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='ass' component='div' />
                                    </div>
                                </div>
                                <label htmlFor="bioType">BIOTIPO</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="bioType"
                                        id="bioType"
                                    >
                                        <option value="TONÍFICADA">TONÍFICADA</option>
                                        <option value="MUSCÚLOSA">MUSCÚLOSA</option>
                                        <option value="ATLÉTICA">ATLÉTICA</option>
                                        <option value="NORMAL">NORMAL</option>
                                    </Field> 
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='bioType' component='div' />
                                    </div>
                                </div>
                                <label htmlFor="category">CATEGORÍAS</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="category"
                                        id="category"
                                    >
                                        <option value="UNIVERSOS">UNIVERSOS</option>
                                        <option value="GALAXÍAS">GALAXÍAS</option>
                                        <option value="ESTRELLAS">ESTRELLAS</option>
                                        <option value="PLANETAS">PLANETAS</option>
                                        <option value="LUNAS">LUNAS</option>
                                        <option value="PÚLSARES">PÚLSARES</option>
                                        <option value="QUÁSARES">QUÁSARES</option>
                                        <option value="COMETAS">COMETAS</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='category' component='div' />
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

export default CreateEscortFemale