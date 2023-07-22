<template>
    <h1>Area lagada</h1>
    <v-btn @click="loggout">
        Deslogar
    </v-btn>
</template>

<script setup lang="ts">
import router from "@/router";
import HttpToken from "@/services/factory/Http/HttpToken";


function loggout() {
    HttpToken.clearToken()

    router.push('/')
}
</script>