import { create } from "zustand"
import getAllEscorts from "../../adapters/escorts/getAllEscorts"

const useStore = create((set,get)=>({
    escorts:[],
    filtered:[],
    loading:false,
    errors:null,

    getEscorts: async (page)=>{
        try {
            set({loading:true})

            const data = await getAllEscorts(page)
            set({
                escorts:data,
                loading:false
            })
        } catch (error) {
            set({
                errors:error,
                loading:false
            })
        }
    },
    searchToParams: (params,value)=>{
        if(value){
            const { escorts }= get()
    
            const profiles = escorts.filter((item)=>{
                const tieneEspacios = /^\s|\s$/.test(params)
                if(tieneEspacios){
                    if(item[params].trim().toUpperCase() === value.toUpperCase()) return item
                }
                if(item[params].toUpperCase() === value.toUpperCase()) return item
            })
            if(profiles.length){
                set({
                    filtered: profiles,
                })
            }else{
                set({
                    filtered: profiles,
                    errors:'No se encontraron perfiles'
                })
            }
        }
    },
    cleanFilter:()=>{
        set({
            filtered:[]
        })
    },
    cleanErrors:()=>{
        set({
            errors:null
        })
    
    } 
}))

export default useStore