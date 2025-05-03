import { create } from "zustand"
import getAllEscorts from "../../adapters/escorts/getAllEscorts"

const useStore = create((set)=>({
    escorts:[],
    filtered:[],
    loading:false,
    errors:null,

    getEscorts: async ()=>{
        try {
            set({loading:true})
            console.log('aca entro')
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
    cleanErrors:set({
        errors:null
    })
}))

export default useStore