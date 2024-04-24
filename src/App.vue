
<template>
    <RouterView />
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import {  onBeforeMount } from 'vue';


const userStore = useUserStore();
onBeforeMount(() => {
    loadUser()

});
function loadUser() {
    userStore.loadUser();
}






</script>
<style scoped>


  
  </style>
