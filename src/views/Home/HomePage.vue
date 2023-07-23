<template>
    <v-container class="mt-16">
        <v-row class="mt-4">
        <v-col cols="12" sm="8" offset-sm="2">
            <h1>Olá {{ name }},</h1>
            <span>Seja bem vindo a sua conta de hospedagem.</span>
        </v-col>
            <v-col cols="12" sm="8" offset-sm="2">
                <div class="embed-responsive">
                <iframe 
                    height="100%" 
                    src="https://www.youtube.com/embed/FMweoEi9clA" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                >
                </iframe>
            </div>
            </v-col>
            <v-col cols="12" sm="8" offset-sm="2">
            <span>Caso tenha alguma dúvida, <span style="text-decoration: underline;">visite nossa central de ajuda.</span></span>
        </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/UserStore";
import { onMounted, ref } from "vue";

const userStore = useUserStore()
const name = ref('')

onMounted(async () => {
    const reponse = await userStore.fetchUserById('1')
    name.value = reponse.name.firstname
})
</script>

<style scoped>
.embed-responsive {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.embed-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100
}
</style>