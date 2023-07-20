<template>
    <v-app :theme="theme">
        <router-view />
    </v-app>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useGlobalStore } from './stores/GlobalStore'

const globalStore = useGlobalStore()

const theme = computed(() => globalStore.theme)
</script>

<style>
button.v-btn {
    color: #F11A40;
}

.v-row{
    flex: 0 0 auto;
    margin: 0;
}
</style>
