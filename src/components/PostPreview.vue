<template>
  <section class="post-preview" @click.stop="displayPost">
    <UserPreview :user="props.post.owner" />
    <div class="post-header">
      <h4>{{ props.post.txt }}</h4>
    </div>

    <span v-html="useSvg(icon)" @click.stop="onUserLike"></span>
    <div class="post-meta">
      <span>Liked by {{ likesCount }} users</span>
      <span>{{ commentsCount }} comments</span>
    </div>
    </section>
</template>
  
<script setup>
import {useSendMsg} from '@/composables/useSendMsg.js'
import {useSvg} from '@/composables/useSvg.js'
import UserPreview from '@/components/UserPreview.vue';
import { computed, ref } from 'vue';


const props = defineProps({
  post: {
    type: Object,
  }
});

const icon= ref('like')

function onUserLike() {
 icon.value = icon.value === 'like' ? 'like-full' : 'like';
}

function displayPost() {
  useSendMsg('display_post', props.post);
}

const likesCount = computed(() => props.post.likedBy.length);
const commentsCount = computed(() => props.post.comments.length);
</script>
  
<style scoped>
.post-preview {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 3px var(--clr3);
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
  