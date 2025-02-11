import {create} from "zustand"
const useStore=create((set)=>({
    username:"",
    handleChangeUsername:(e)=>
        set({username:e.target.value}),
    isloggedin:false,
    isLogin:()=>set({isloggedin:true})

}))
export default useStore