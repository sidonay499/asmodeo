import { Field, Formik, Form, ErrorMessage } from 'formik'
import ButtonReact from '../../buttons/buttonsReact/ButtonReact'
import { validateEscort } from '../../../../utils/schema'
import './createEscort.css'

const CreateEscort = ()=>{
    return(
        <Formik
            initialValues={{
                name:'',
                age:'',
                heigth:'',
                weigth:'',
                hairColor:'',
                eyesColor:'',
                shaved:'',
                breast:'',
                cintura:'',
                cadera:'',
                bodyType:'',
                breasts:'',
                ass:'',
                bioType:'',
                tattoos:'',
                description:'',
                price:'',
                phone:'',
                location:'',
                state:'',
                country:''
            }}
            validationSchema={validateEscort}
            onSubmit={()=>{}}
        >
            {
                ()=>(
                    <Form
                        className='form_create_escort'
                    >
                        <div className='box_select' >
                            <label htmlFor="hairColor">COLOR DE CABELLO</label>
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
                            <label htmlFor="eyesColor">COLOR DE OJOS</label>
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
                            <label htmlFor="shaved">DEPILACIÓN</label>
                            <Field
                                as="select"
                                name="shaved"
                                id="shaved"
                            >
                                <option value="FULL">FULL</option>
                                <option value="PARCIAL">PARCIAL</option>
                                <option value="NATURAL">NATURAL</option>
                            </Field>
                            <label htmlFor="bodyType">CONSTEXTURA</label>
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
                            <label htmlFor="breasts">PECHOS</label>
                            <Field
                                as="select"
                                name="breasts"
                                id="breasts"
                            >
                                <option value="PEUEÑOS">PEUEÑOS</option>
                                <option value="PERFECTOS">PERFECTOS</option>
                                <option value="GRANDES">GRANDES</option>
                                <option value="EXTRA GRANDES">EXTRA GRANDES</option>
                            </Field>
                            <label htmlFor="ass">COLA</label>
                            <Field
                                as="select"
                                name="ass"
                                id="ass"
                            >
                                <option value="CHICA">CHICA</option>
                                <option value="PERFECTA">PERFECTA</option>
                                <option value="GRANDE">GRANDE</option>
                            </Field>
                            <label htmlFor="bioType">BIOTIPO</label>
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
                        </div>
                        <div className='box_inputs' >
                            <Field
                                type="text"
                                name='name'
                                placeholder='NOMBRE'
                            />
                            <div className='box_create_escort_error' >
                                <ErrorMessage name='name' component='div' />
                            </div>
                            <Field
                                type="text"
                                name='age'
                                placeholder='EDAD'
                            />
                            <div className='box_create_escort_error' >
                            </div>
                            <Field
                                type="text"
                                name='heigth'
                                placeholder='ESTATURA'
                            />
                            <div className='box_create_escort_error' >
                            </div>
                            <Field
                                type="text"
                                name='weigth'
                                placeholder='PESO'
                            />
                            <div className='box_create_escort_error' >
                            </div>
                            <div className='box_measures' >
                                <label htmlFor="">MEDIDAS</label>
                                <div>
                                    <Field
                                        className='measures_input'
                                        type="number"
                                        name="breast"
                                        placeholder='PECHOS'
                                    />
                                    <Field
                                        className='measures_input'
                                        type="number"
                                        name="cintura"
                                        placeholder='CINTURA'
                                    />
                                    <Field
                                        className='measures_input'
                                        type="number"
                                        name="cadera"
                                        placeholder='CADERA'
                                    />
                                </div>
                            </div>
                            <label htmlFor="">IMÁGEN DE PERFÍL</label>
                            <Field 
                                type="file"
                                name="imageProfile"
                            />
                            <label htmlFor="">IMÁGENES PARA GALERÍA</label>
                            <Field
                                type="file"
                                name="images"
                            />
                            <div className='box_button_create_escort' >
                                <ButtonReact>
                                    CREAR
                                </ButtonReact>
                            </div>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}

export default CreateEscort