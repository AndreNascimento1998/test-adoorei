<template>
    <v-img 
    style="cursor: pointer;"
    @click="globalStore.swapTheme"
    :max-width="smAndUp ? '20%' : '50%'"
    class="mb-6" 
    :src="logo" 
    />
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/GlobalStore";
import { useDisplay } from "vuetify/lib/framework.mjs";
import logo from "@/assets/logo.png"

const globalStore = useGlobalStore()
const { smAndUp } = useDisplay()
</script>
