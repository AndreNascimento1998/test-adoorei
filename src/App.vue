<template>
    <v-app :theme="theme">
       <v-overlay v-model="loading" class="align-center justify-center">
            <v-progress-circular color="#F11A40" indeterminate size="64" />
        </v-overlay>
            <router-view />
    </v-app>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useGlobalStore } from './stores/GlobalStore'

const globalStore = useGlobalStore()

const theme = computed(() => globalStore.theme)
const loading = computed(() => globalStore.loadingPage)
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
