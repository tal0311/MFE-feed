<template>
        <dialog  ref="modalRef">
            <button @click="closeModal">X</button>
            <component :is="modalCmp" />
        </dialog>
</template>

<script setup>
import AddPost from '@/components/AddPost.vue';
import { usePostStore } from "@/stores/itemStore";
import { useSendMsg } from '@/composables/useSendMsg'
import { ref, watchEffect, computed, onMounted } from 'vue';
const postStore= usePostStore()

const modalRef = ref(null);
const modalType=computed(()=> postStore.getModalType);

onMounted(() => {
    console.log(postStore.getModalType);
});


const modalCmp= computed(() => {
    
   if(modalType.value ==='add_post') {
      return AddPost;
   }
   return null;
});

watchEffect(() => {
    console.log(modalType.value);
    if(modalType.value) openModal();
});

function openModal() {
    modalRef.value.showModal();
}

function closeModal(){
    modalRef.value.close();
    postStore.setModalType(null);
    useSendMsg('close_modal', null);
   
}
</script>