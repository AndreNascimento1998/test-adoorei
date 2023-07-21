<template>
    <v-card>
        <v-card-title class="mt-2">
            <h3>Entra na sua conta</h3>
            <p class="sub-title">Para acessar sua conta informe o email e senha</p>
        </v-card-title>
        <v-form fast-fail @submit.prevent>
        <v-col class="px-2 py-0">
            <v-text-field
                variant="outlined"  
                placeholder="aaaaa.aa14@ig.com"
                persistent-placeholder
                density="compact"
                label="Email"
            />
        </v-col>
        <v-col class="px-2 py-0 text-end">
            <v-text-field
            variant="outlined"
            density="compact"
            placeholder="Sua senha"
            persistent-placeholder
            type="password"
            label="Senha"
            />
            <span class="recover-pass">Esqueceu a senha?</span>
        </v-col>
            <v-col cols="12" class="pa-2 mt-2">
                <v-btn 
                    variant="outlined" 
                    block 
                >
                    Fazer login
                </v-btn>
            </v-col>
            <v-col cols="12" sm="12" class="pa-2 text-center mt-2 mb-2">
                <span>
                    Ainda não tem uma conta? 
                    <span
                        v-if="smAndUp"
                        @click="router.push('/planos')"
                        class="nextPage"
                    >
                        Cadastra-se
                    </span>
                    <p 
                        v-else
                        @click="(() => router.push('/planos'))"
                        class="nextPage"
                    >
                        Cadastra-se
                    </p>
                </span>
            </v-col>
        </v-form>
    </v-card>
</template>

<script setup lang="ts">
import router from "@/router";
import { useDisplay } from "vuetify/lib/framework.mjs";

const {smAndUp} = useDisplay()
</script>

<style scoped>
.nextPage {
    color: #F11A40;
    cursor: pointer;
}

p{
    font-size: 12px;
}

.font-hover {
    font-size: 14px;
    text-decoration: underline;
}

.recover-pass {
    font-size: 12px;
    font-style: italic;
}
</style>