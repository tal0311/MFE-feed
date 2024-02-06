<template>
  <section class="post-preview grid" @click.stop="displayPost">

    <section class="post-main-content">
      <UserPreview :user="props.post.owner" />

      <div class="post-header">
        <h4>{{ props.post.txt }}</h4>
      </div>
    </section>

    <img :src="props.post.imgUrl" alt="Post Image" class="post-img">

    <section class="post-footer">
      <span v-html="useSvg(icon)" @click.stop="onUserLike"></span>
      <div class="post-meta">
        <span>Liked by {{ likesCount }} users</span>
        <span>{{ commentsCount }} comments</span>
      </div>
    </section>


  </section>
</template>
  
<script setup>
import { useSendMsg } from '@/composables/useSendMsg.js'
import { useSvg } from '@/composables/useSvg.js'
import UserPreview from '@/components/UserPreview.vue';
import { computed, ref } from 'vue';


const props = defineProps({
  post: {
    type: Object,
  }
});

const icon = ref('like')

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
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 3px var(--clr3);
  grid-template-columns: 1.4fr 0.6fr;
  grid-template-rows: 1.6fr 0.4fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "post-content post-img"
    "post-footer post-img";
}

.post-header h2 {
  margin: 0;
}

.post-img {
  grid-area: post-img;
 }

.post-main-content {
  grid-area: post-content;
  padding: 1.2rem;
}

.post-footer {
  grid-area: post-footer;
  padding: 1.2rem;
}
</style>
  