import { useFormik } from 'formik'
import './createEscort.css'

const CreateEscort = ()=>{

    const formik = useFormik({
        initialValues:{
            
        }
    })

    return(
        <form>
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
        </form>
    )
}

export default CreateEscort