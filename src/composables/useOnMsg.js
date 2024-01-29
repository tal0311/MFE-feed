import { usePostStore } from "@/stores/itemStore";



export function useOnMsg(type, payload) {
    console.log('useSendMsg', type, payload);
 if(type === 'add_post'){
     const postStore = usePostStore()
     postStore.addPost(payload)
 }
}