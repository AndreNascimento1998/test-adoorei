<template>
     <v-img 
        :max-width="smAndUp ? '20%' : '50%'"
        class="mb-6" 
        :src="logo" 
    />
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";
import logo from "@/assets/logo.png"

const { smAndUp } = useDisplay()
</script>