<template>
  <div class="post-preview" @click.stop="displayPost">
    <UserPreview :user="props.post.owner" />

    <div class="post-header">
      <h4>{{ props.post.txt }}</h4>
    </div>

    <div class="post-meta">
      <span>Liked by {{ likesCount }} users</span>
      <span>{{ commentsCount }} comments</span>
    </div>
    <div v-if="props.post.comments.length" class="comments">
      <h3>Comments:</h3>
      <div class="comment" v-for="comment in props.post.comments" :key="comment.commentId">
        <p><strong>{{ comment.owner.username }}:</strong> {{ comment.text }}</p>

      </div>
    </div>
  </div>
</template>
  
<script setup>

import UserPreview from '@/components/UserPreview.vue';
import { computed } from 'vue';

const props = defineProps({
  post: {
    type: Object,
  }
});

function displayPost() {
  window.parent.postMessage(
    { type: 'display_post', payload: JSON.parse(JSON.stringify(props.post)) }
    , import.meta.env.VITE_MAIN_CONTAINER_URL);
}

const likesCount = computed(() => props.post.likedBy.length);
const commentsCount = computed(() => props.post.comments.length);
</script>
  
<style scoped>
.post-preview {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
}

.post-header h2 {
  margin: 0;
}

.post-image {
  max-width: 100%;
  height: auto;
}

.comment {
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.comment-image {
  max-width: 50px;
  height: auto;
}
</style>
  