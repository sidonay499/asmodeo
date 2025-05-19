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
    filterGenderMale: ()=>{
        const { escorts }= get()

        const maleProfiles = escorts.filter((item)=>{
            if(item.gender === 'MALE') return item
        })
        set({
            filtered:maleProfiles
        })
    },
    filterGenderFemale: ()=>{
        const { escorts }= get()

        const femaleProfile = escorts.filter((item)=>{
            if(item.gender === 'FEMALE') return item
        })
        set({
            filtered:femaleProfile
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