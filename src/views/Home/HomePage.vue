<template>
    <v-row>
        <v-col cols="12">
            <h1>Area lagada</h1>
            <v-btn @click="loggout">
                Deslogar
            </v-btn>
        </v-col>

        <v-col cols="12" sm="6" offset-sm="3">
            <iframe 
                width="800" 
                height="615" 
                src="https://www.youtube.com/embed/FMweoEi9clA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </v-col>

    </v-row>
</template>

<script setup lang="ts">
import router from "@/router";
import HttpToken from "@/services/factory/Http/HttpToken";


function loggout() {
    HttpToken.clearToken()

    router.push('/')
}
</script>