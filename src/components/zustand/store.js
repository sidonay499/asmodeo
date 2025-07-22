import { create } from "zustand"
import getAllEscorts from "../../adapters/escorts/getAllEscorts"

const useStore = create((set,get)=>({
    escorts:[],
    pages:1,
    filterActive:false,
    filter:{
        type:null,
        value:null
    },
    currentPage:1,
    loading:false,
    errors:null,

    getEscorts: async (all)=>{
        try {
            const { currentPage,escorts,filterActive,filter }= get()
            set({
                loading:true
            })
            const data = await getAllEscorts(currentPage,filter.type,filter.value)
            if(!data.escorts){
                set({
                    loading:false,
                    errors:'NO SE ENCONTRARON PERFILES',
                    escorts:[]
                })
                return
            }
            if(all){
                set({
                    loading:false,
                    escorts:data.escorts,
                    pages:data.pages,
                    currentPage:1
                })
                return
            }
   
            if(filterActive && filter.type !== null){
                set({
                    loading:false,
                    escorts:currentPage === 1 ? data.escorts : [...escorts,...data.escorts],
                    pages:data.pages,
                })
                return
            }
            set({
                loading:false,
                escorts:escorts.length === 0 ? data.escorts : [...escorts,...data.escorts],
                pages:data.pages,
            })

        } catch (error) {
            console.error('Error fetching escorts:', error)
            set({
                errors:error,
                loading:false
            })
        }
    },
    setFilter: (type,value)=>{
        set({
            filter:{
                type,
                value
            }
        })
    },
    setCurrentPage:(page)=>{
        set({
            currentPage:page
        })
    },
    cleanErrors:()=>{
        set({
            errors:null,
            escorts:[]
        })
    
    },
    setFilterActive:(value)=>{
        set({
            filterActive:value
        })
    }
}))

export default useStore