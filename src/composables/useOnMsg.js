import { usePostStore } from '@/stores/itemStore'

export function useOnMsg(type, payload) {
    const postStore = usePostStore()
  if (type === 'add_post') {
    postStore.addPost(payload)
  }

  if (type === 'filter_posts') {
    postStore.setFilterBy({ txt: payload })
  }
}
