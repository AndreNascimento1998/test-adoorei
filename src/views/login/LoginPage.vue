<template>
    <v-container class="my-auto">
        <ImgComponent 
            class="mx-auto"
        />
        <v-btn @click="globalStore.swapTheme">mudar tema dev</v-btn>
        <v-row>
            <v-col cols="12" sm="4" offset-sm="4">  
                <FormLogin />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

import { useGlobalStore } from "@/stores/GlobalStore";
import ImgComponent from "@/components/Img/ImgComponent.vue"
import FormLogin from "./Partials/FormLogin.vue"

const globalStore = useGlobalStore()


</script>