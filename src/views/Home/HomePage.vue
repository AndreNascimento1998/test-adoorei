<template>
    <v-container class="mt-16">
        <v-row class="mt-4">
        <v-col cols="12" sm="8" offset-sm="2">
            <h1>Olá João,</h1>
            <span>Seja bem vindo a sua conta de hospedagem.</span>
        </v-col>
            <v-col cols="12" sm="8" offset-sm="2">
                <iframe 
                    :width="smAndUp ? 800 : 280" 
                    :height="smAndUp ? 615 : 300" 
                    src="https://www.youtube.com/embed/FMweoEi9clA" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </v-col>
            <v-col cols="12" sm="8" offset-sm="2">
            <span>Caso tenha alguma dúvida, <span style="text-decoration: underline;">visite nossa central de ajuda.</span></span>
        </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";



const {smAndUp} = useDisplay()
</script>