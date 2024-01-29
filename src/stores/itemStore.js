import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { postService } from '@/services/item.service.local.js'
import { showSuccessMsg } from '@/services/event-bus.service'

export const usePostStore = defineStore('post', () => {
  const post = ref(null)
  const currPost = ref(null)
  const filterBy = ref({ txt: '' })

  const getPosts = computed(() => post?.value)
  const getCurrPost = computed(() => currPost?.value)

  async function loadPosts() {
    post.value = await postService.query(filterBy.value)
  }

  async function addPost({txt}) {
    let emptyPost= postService.getEmptyItem()
    emptyPost.txt = txt
    const itemToAdd = await postService.save(emptyPost)
    console.log('emptyPost', emptyPost);
    post.value.push(itemToAdd)
    showSuccessMsg('Post Added!')
  }

  async function removePost(itemId) {
    await postService.remove(itemId)
    const idx = post.value.findIndex((item) => item._id === itemId)
    post.value.splice(idx, 1)
    showSuccessMsg('Post Removed!')
  }

  async function updatePost({ itemId, key, value }) {
    const item = await postService.getById(itemId)
    item[key] = value
    const itemToUpdate = await postService.save(item)
    const idx = post.value.findIndex((item) => item._id === itemId)
    post.value.splice(idx, 1, itemToUpdate)
    showSuccessMsg('Post Updated!')
  }

  async function getPostById(itemId) {
    console.log('itemId', itemId)
    currPost.value = await postService.getById(itemId)
  }

  return {
    loadPosts,
    getPosts,
    getCurrPost,
    addPost,
    removePost,
    updatePost,
    getPostById
  }
})
