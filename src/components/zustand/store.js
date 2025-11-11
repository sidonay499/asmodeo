import { create } from "zustand"
import getAllEscorts from "../../adapters/escorts/getAllEscorts"
import getParams from "../../adapters/escorts/getParams"
import mookup from "../../utils/mookup.json"

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

    getEscorts: (all)=>{
        try {
            const { currentPage,escorts }= get()

            set({
                loading:true
            })

            const data = mookup

            if(all){
                set({
                    loading:false,
                    escorts:data.escorts,
                    pages:data.pages
                })
                return
            }

            set({
                loading:false,
                escorts:escorts ? [...escorts,...data.escorts] : data.escorts,
                pages:data.pages
            })

        } catch (error) {
            console.error('Error fetching escorts:', error)
            set({
                errors:error,
                loading:false
            })
        }
    },
    getParameters:async ()=>{
        const { currentPage,filter,escorts } = get()

        set({
            loading:true
        })

        try {
            const profiles = await getParams(currentPage,filter.type,filter.value)
            set({
                loading:false,
                escorts:filter.type && currentPage > 1 ? [...escorts,...profiles.escorts] : profiles.escorts,
            })
        } catch (error) {
            set({
                loading:false,
                error:error.message
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