import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useSendMsg } from '@/composables/useSendMsg';


import { userService } from '@/services/user.service.js'

export const useUserStore = defineStore('user', () => {
  const loggedIdUser = ref(null)

  const getLoggedUser = computed(() => loggedIdUser?.value)

  async function loadUser() {
    loggedIdUser.value = await userService.getLoggedInUser()
  //  console.log('loggedIdUser', loggedIdUser.value);

   useSendMsg('handle_user', loggedIdUser.value);


  }

  async function updateItem({ userId, key, value }) {
    const user = await userService.getById(userId)
    user[key] = value
    loggedIdUser.value = await userService.save(user)
  }
  return {
    getLoggedUser,
    loadUser,
    updateItem
  }
})
