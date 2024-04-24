import { storageService } from './async-storage.service.js'
// import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

import posts from './../../data/item.json'
const STORAGE_KEY = 'post_DB'

export const postService = {
  query,
  getById,
  save,
  remove,
  getEmptyItem,
  getEmptyComment
}
window.postService = postService

async function query(filterBy) {
  console.log('filterBy',filterBy);
  let posts = await storageService.query(STORAGE_KEY)
  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    posts = posts.filter((item) => {
      console.log(item.txt);
      regex.test(item.txt)
    })
  }
  console.log(posts);
  return posts
}
function getById(itemId) {
  return storageService.get(STORAGE_KEY, itemId)
  // return httpService.get(`item/${itemId}`)
}

async function remove(itemId) {
  await storageService.remove(STORAGE_KEY, itemId)
  // return httpService.delete(`item/${itemId}`)
}
async function save(item) {
  var savedItem
  if (item._id) {
    savedItem = await storageService.put(STORAGE_KEY, item)
    // savedItem = await httpService.put(`item/${item._id}`, item)
  } else {
    // Later, owner is set by the backend
    item.owner = userService.getLoggedInUser()
    savedItem = await storageService.post(STORAGE_KEY, item)
    // savedItem = await httpService.post('item', item)
  }
  return savedItem
}

function getEmptyItem(txt) {
  return {
    postId:null,
    owner: {},
    likedBy: [],
    comments: [],
    updatedAt: null,
    createdAt: Date.now(),
    txt,
    imgUrl: "https://source.unsplash.com/random/300x300"
  }
}


function getEmptyComment(){
  return{
    commentId: null,
    owner: { },
    text: "",
    createdAt: Date.now(),
    imgUrl: "https://example.com/image.jpg"
  }
}

// TEST DATA
;(async () => {
  utilService.saveToStorage(STORAGE_KEY, posts)
})()
