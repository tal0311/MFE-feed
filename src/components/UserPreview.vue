<template>
  <div class="user-preview grid grid-dir-col" @click.stop="onUserClick">
    <img :src="props.user.imgUrl" alt="User Image" class="user-image">
    <h2> {{ props.user.username }}</h2>
  </div>
</template>
  
<script setup>
import {  onMounted } from 'vue';


const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => ({
      username: '',
      imgUrl: ''
    })
  }
});

onMounted(() => {
  console.log('user preview mounted');  
})

const onUserClick = () => {
  const userClone= JSON.parse( JSON.stringify(props.user))

  window.parent.postMessage({ type: 'display_user', payload: userClone }, import.meta.env.VITE_MAIN_CONTAINER_URL);
};
</script>
  
<style scoped>
.user-preview {
  justify-content: start;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1rem;
}

.user-preview h2 {
  margin: 0;
}

.user-image {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  max-width: 100%;
  height: auto;
  aspect-ratio: 1/1
}
</style>
  