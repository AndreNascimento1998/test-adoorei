<template>
    <v-container class="my-auto">
        <ImgComponent 
            class="mx-auto"
        />
        <v-row>  
            <v-col cols="12" sm="4" offset-sm="4">  
                <FormLogin />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import ImgComponent from "@/components/Img/ImgComponent.vue"
import FormLogin from "./Partials/FormLogin.vue"

</script>