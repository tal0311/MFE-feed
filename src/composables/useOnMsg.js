import { usePostStore } from "@/stores/itemStore";



export function useOnMsg(type, payload) {
   
    if(type === 'add_post'){
     const postStore = usePostStore()
     postStore.addPost(payload)
 }
}