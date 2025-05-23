import Card from '../cards/Card'
import './cardsPreview.css'
import useStore from '../../zustand/store'
import Loader from '../icons/loader/Loader'
import { useEffect, useState } from 'react'
import Detail from '../modals/detail/Detail'
import Alert from '../modals/alerts/Alert'
import PageNavigator from '../pageNavigator/PageNavigator'

const CardsPreview = ()=>{
    const [detail,serDetail] = useState('')
    const [page,setPage] = useState(1)
    const {
 
        filtered,
        loading,
        errors,
        getEscorts,
        cleanErrors,
    } = useStore()

    const escorts =  [
  {
    id: 1,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 150,
    name: "Camila",
    age: 25,
    location: "Buenos Aires"
  },
  {
    id: 2,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 200,
    name: "Sofia",
    age: 28,
    location: "Córdoba"
  },
  {
    id: 3,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 180,
    name: "Lucía",
    age: 23,
    location: "Rosario"
  },
  {
    id: 4,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 220,
    name: "Valentina",
    age: 30,
    location: "Mendoza"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  },
  {
    id: 5,
    imageProfile: "https://media.vogue.es/photos/5cc7516315d9a34a16e8381b/master/w_1600%2Cc_limit/modelos_nuevas_new_york_fashion_week_shan_fernandez_5573.jpg",
    price: 170,
    name: "Julieta",
    age: 26,
    location: "Salta"
  }
];

    useEffect(()=>{
        if(escorts.length === 0){
            getEscorts(page)
        }
    },[filtered,page])

    const handleAlert = ()=>{
        cleanErrors()
    }

    const handleDetail = (id)=>{
        serDetail(id)
    }

    const fowardPage = ()=>{
        if(escorts.length > 14){
            setPage(page+1)
        }
    }

    const backPage = ()=>{
        if(page >= 2){
            setPage(page - 1)
        }
    }

    const startPage = ()=>{
        setPage(1)
    }

    return(
        <section>
            <div className='container_cardsPreview' >
                {loading && <Loader size={80} />}
                {errors && <Alert handleAlert={handleAlert} >{errors}</Alert>}
                {detail && <Detail handleDetail={handleDetail} id={detail}/>}
                {
                    filtered.length >= 1 ? (
                        filtered.map((item)=>(
                            <Card handleDetail={handleDetail} item={item} key={item.id} />
                        ))
                    ) : (
                        escorts.map((item)=>(
                            <Card handleDetail={handleDetail} item={item} key={item.id} />
                        ))
                    )
                }
            </div>
            <PageNavigator 
                page={page} 
                fowardPage={fowardPage}
                backPage={backPage}
                startPage={startPage}
            />
        </section>
    )
}

export default CardsPreview