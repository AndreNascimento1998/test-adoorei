<template>
    <v-container class="my-auto">
        <ImgComponent 
            class="mx-auto"
        />
        <v-btn @click="globalStore.swapTheme">mudar tema dev</v-btn>
        <v-row>
            <v-col cols="12" sm="4" offset-sm="4">  
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
                        <v-col cols="12" sm="9" class="pa-2 mt-2 mb-2">
                            <h3>Ainda não tem uma conta?</h3>
                            <p>Não perca tempo clique aqui para <span @click="() => router.push('/cadastro')" class="font-hover">se cadastrar!</span></p>
                        </v-col>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import router from "@/router";
import { useGlobalStore } from "@/stores/GlobalStore";
import ImgComponent from "@/components/ImgComponent.vue"

const globalStore = useGlobalStore()

</script>

<style scoped>
p{
    font-size: 12px;
}

.font-hover {
    font-size: 14px;
    text-decoration: underline;
}

.font-hover:hover{
    cursor: pointer;
    color: #F11A40;
}

.recover-pass {
    font-size: 12px;
    font-style: italic;
}
</style>