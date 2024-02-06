
<template>
    <RouterView />
</template>

<script setup>
import { useUserStore } from '@/stores/userStore';
import { computed, watchEffect, onBeforeMount } from 'vue';
import { useSendMsg } from '@/composables/useSendMsg';

const userStore = useUserStore();
onBeforeMount(() => {
    loadUser()

});
function loadUser() {
    userStore.loadUser();
}

const loggedUser = computed(() => userStore.getLoggedUser);

watchEffect(() => {
    if (loggedUser.value) sendUserToParent();
});

function sendUserToParent() {
    useSendMsg('handle_user', loggedUser.value);

};
</script>
<style scoped></style>
