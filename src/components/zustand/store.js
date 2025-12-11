import { create } from "zustand"
import getAllEscorts from "../../adapters/escorts/getAllEscorts"
import getAllEscortsByAdmin from "../../adapters/escorts/getAllEscortsByAdmin"

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

    getEscorts: async ()=>{
        try {
            set({
                loading:true
            })

            const data = await getAllEscorts()

            set({
                loading:false,
                escorts:data,
            })

        } catch (error) {
            console.error('Error fetching escorts:', error)
            set({
                errors:error,
                loading:false
            })
        }
    },
    getEscortByAdmin: async ()=>{
        try {
            const { escorts, currentPage } = get()
            set({
                loading:true
            })

            const res = await getAllEscortsByAdmin(currentPage)

            if(!res.escorts){
                set({
                    loadin:false,
                    errors:res
                })
                return
            };
            
            set({
                loading:false,
                escorts: escorts ? [...escorts, ...res.escorts] : res.escorts,
                pages:res.pages
            })
        } catch (error) {
            set({
                loading:false,
                error:error
            })
        }
    },
    // getParameters:async ()=>{
    //     const { currentPage,filter,escorts } = get()

    //     set({
    //         loading:true
    //     })

    //     try {
    //         const profiles = await getParams(currentPage,filter.type,filter.value)
    //         set({
    //             loading:false,
    //             escorts:filter.type && currentPage > 1 ? [...escorts,...profiles.escorts] : profiles.escorts,
    //         })
    //     } catch (error) {
    //         set({
    //             loading:false,
    //             error:error.message
    //         })
    //     }

    // },
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
            escorts:[],
            loading:false
        })
    
    },
    setFilterActive:(value)=>{
        set({
            filterActive:value
        })
    }
}))

export default useStore