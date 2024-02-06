

<template>
  <main>
    <PostList v-if="posts" :posts="posts" />
  </main>
</template>

<script setup>

import PostList from '@/components/PostList.vue';
import { onMounted, computed } from 'vue';

import { usePostStore } from '@/stores/itemStore';

const postStore = usePostStore();



onMounted(() => {
  postStore.loadPosts();
  
});


const posts = computed(() => postStore.getPosts);

</script>


<style scoped >
main {

  /* border-radius: 1rem; */
  /* box-shadow: 0 0 1rem rgba(0,0,0,0.2); */

}
</style>
