import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validateEscortMale } from '../../../../../utils/schema'
import { useState } from 'react'
import ButtonReact from '../../../buttons/buttonsReact/ButtonReact'
import Loader from '../../../icons/loader/Loader'
import './createEscortMale.css'
import uploadImageProfile from '../../../../../adapters/escorts/uploadImageProfile'
import uploadImageGalery from '../../../../../adapters/escorts/uploadImageGalery'
import createProfile from '../../../../../adapters/escorts/createProfile'
import Alert from '../../../modals/alerts/Alert'

const CreateEscortMale = ()=>{
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
                    penis:'',
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
                    country:''
                }}
                validationSchema={validateEscortMale}
                onSubmit={ async (values)=>{
                    try {
                        console.log('aca entró')
                        setLoader(!loader)
                        const formData = new FormData()
                        const profileImg = values.imageProfile
                        const galeryImgs = values.images

                        const urlProfile = await uploadImageProfile(formData, profileImg)
                        const urlsGalery = await uploadImageGalery(formData,galeryImgs)
                        console.log('images', urlProfile,urlsGalery)

                        const profileRes = await createProfile(values,urlProfile,urlsGalery)
                        setLoader(false)
                        setAlert(profileRes)
                        console.log('resprofile', profileRes)
                    } catch (error) {
                        setLoader(false)
                        setAlert('Ocurrió un error 🧙‍♂️')
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
                                <label htmlFor="hairColor">COLOR DE CABELLO</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="hairColor"
                                        id="hairColor"
                                    >
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
                                        <option value="DELGAD0">DELGADO</option>
                                        <option value="MUY DELGADO">MUY DELGADO</option>
                                        <option value="RELLENO">RELLENO</option>
                                        <option value="NORMAL">NORMAL</option>
                                    </Field>
                                    <div className='box_create_escort_error' >
                                        <ErrorMessage name='bodyType' component='div' />
                                    </div>
                                </div>
                                <label htmlFor="caterogy">CATEGORÍAS</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="caterogy"
                                        id="caterogy"
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
                                        <ErrorMessage name='caterogy' component='div' />
                                    </div>
                                </div>
                                <label htmlFor="bioType">BIOTIPO</label>
                                <div className='box_input' >
                                    <Field
                                        as="select"
                                        name="bioType"
                                        id="bioType"
                                    >
                                        <option value="TONÍFICADA">TONÍFICADO</option>
                                        <option value="MUSCÚLOSA">MUSCÚLOSO</option>
                                        <option value="ATLÉTICA">ATLÉTICO</option>
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