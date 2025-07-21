import { create } from "zustand"
import getAllEscorts from "../../adapters/escorts/getAllEscorts"

const useStore = create((set,get)=>({
    escorts:[],
    pages:1,
    filterActive:false,
    currentPage:1,
    loading:false,
    errors:null,

    getEscorts: async (param,value)=>{
        try {
            const { currentPage }= get()
            set({loading:true})
    
            const data = await getAllEscorts(currentPage,param,value)
            if(data.length){
                set({
                    loading:false,
                    errors:'NO SE ENCONTRARON PERFILES'
                })
            }
            set({
                escorts:data.escorts,
                pages:data.pages,
                loading:false
            })
        } catch (error) {
            set({
                errors:error,
                loading:false
            })
        }
    },
    setCurrentPage:(page)=>{
        set({
            currentPage:page
        })
    },
    cleanErrors:()=>{
        set({
            errors:null
        })
    
    },
    setFilterActive:(value)=>{
        set({
            filterActive:value
        })
    }
}))

export default useStore