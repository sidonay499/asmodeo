import { create } from "zustand"
import getAllEscorts from "../../adapters/escorts/getAllEscorts"

const useStore = create((set,get)=>({
    escorts:[],
    filtered:[],
    loading:false,
    errors:null,

    getEscorts: async ()=>{
        try {
            set({loading:true})

            const data = await getAllEscorts()
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
        const { escorts }= get()

        const profiles = escorts.filter((item)=>{
            if(item[params] === value) return item
        })
        set({
            filtered: profiles
        })
    },
    cleanFilter:set({
        filtered:[]
    }),
    cleanErrors:set({
        errors:null
    })
}))

export default useStore