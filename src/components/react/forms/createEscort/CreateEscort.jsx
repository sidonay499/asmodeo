import { useFormik } from 'formik'
import './createEscort.css'
import ButtonReact from '../../buttons/buttonsReact/ButtonReact'

const CreateEscort = ()=>{

    const formik = useFormik({
        initialValues:{
            
        }
    })

    return(
        <form
            className='form_create_escort'
        >
            <div className='box_select' >
                <label htmlFor="hairColor">COLOR DE CABELLO</label>
                <select
                    name="hairColor"
                    id="hairColor"
                >
                    <option value="NEGRO">NEGRO</option>
                    <option value="RUBIO">RUBIO</option>
                    <option value="CASTAÑO">CASTAÑO</option>
                    <option value="CASTAÑO OSCURO">CASTAÑO OSCURO</option>
                    <option value="RUBIO OSCURO">RUBIO OSCURO</option>
                    <option value="COLORADO">COLORADO</option>
                </select>
                <label htmlFor="eyesColor">COLOR DE OJOS</label>
                <select
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
                </select>
                <label htmlFor="shaved">DEPILACIÓN</label>
                <select
                    name="shaved"
                    id="shaved"
                >
                    <option value="FULL">FULL</option>
                    <option value="PARCIAL">PARCIAL</option>
                    <option value="NATURAL">NATURAL</option>
                </select>
                <label htmlFor="bodyType">CONSTEXTURA</label>
                <select
                    name="bodyType"
                    id="bodyType"
                >
                    <option value="DELGADA">DELGADA</option>
                    <option value="MUY DELGADA">MUY DELGADA</option>
                    <option value="VOLUPTUOSA">VOLUPTUOSA</option>
                    <option value="RELLENA">RELLENA</option>
                </select>
                <label htmlFor="breasts">PECHOS</label>
                <select
                    name="breasts"
                    id="breasts"
                >
                    <option value="PEUEÑOS">PEUEÑOS</option>
                    <option value="PERFECTOS">PERFECTOS</option>
                    <option value="GRANDES">GRANDES</option>
                    <option value="EXTRA GRANDES">EXTRA GRANDES</option>
                </select>
                <label htmlFor="ass">COLA</label>
                <select
                    name="ass"
                    id="ass"
                >
                    <option value="CHICA">CHICA</option>
                    <option value="PERFECTA">PERFECTA</option>
                    <option value="GRANDE">GRANDE</option>
                </select>
                <label htmlFor="bioType">BIOTIPO</label>
                <select
                    name="bioType"
                    id="bioType"
                >
                    <option value="TONÍFICADA">TONÍFICADA</option>
                    <option value="MUSCÚLOSA">MUSCÚLOSA</option>
                    <option value="ATLÉTICA">ATLÉTICA</option>
                    <option value="NORMAL">NORMAL</option>
                </select> 
            </div>
            <div className='box_inputs' >
                <input
                    type="text"
                    id='name'
                    name='name'
                    placeholder='NOMBRE'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                <div className='box_create_escort_error' >
                    {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
                </div>
                <input
                    type="text"
                    id='age'
                    name='age'
                    placeholder='EDAD'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.age}
                />
                <div className='box_create_escort_error' >
                    {formik.touched.age && formik.errors.age && <p>{formik.errors.age}</p>}
                </div>
                <input
                    type="text"
                    id='heigth'
                    name='heigth'
                    placeholder='ESTATURA'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.heigth}
                />
                <div className='box_create_escort_error' >
                    {formik.touched.heigth && formik.errors.heigth && <p>{formik.errors.heigth}</p>}
                </div>
                <input
                    type="text"
                    id='weigth'
                    name='weigth'
                    placeholder='PESO'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.weigth}
                />
                <div className='box_create_escort_error' >
                    {formik.touched.weigth && formik.errors.weigth && <p>{formik.errors.weigth}</p>}
                </div>
                <div className='box_measures' >
                    <label htmlFor="">MEDIDAS</label>
                    <div>
                        <input
                            className='measures_input'
                            type="number"
                            placeholder='PECHOS'
                            required 
                        />
                        <input
                            className='measures_input'
                            type="number"
                            placeholder='CINTURA'
                            required 
                        />
                        <input
                            className='measures_input'
                            type="number"
                            placeholder='CADERA'
                            required 
                        />
                    </div>
                </div>
                <div className='box_button_create_escort' >
                    <ButtonReact>
                        CREAR
                    </ButtonReact>
                </div>
            </div>
        </form>
    )
}

export default CreateEscort