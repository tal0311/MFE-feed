
<template>
 <section>
    <PostPreview v-for="post in props.posts" :key="post.postId" :post="post" />
 </section>
</template>
<script setup>
import PostPreview from '@/components/PostPreview.vue';

const props= defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

</script>