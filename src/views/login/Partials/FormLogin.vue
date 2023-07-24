<template>
    <v-card>
        <v-card-title class="mt-2 px-0">
            <h3 class="px-2">Entra na sua conta</h3>
            <p 
                class="sub-title px-2 mb-2"
            >
                Para acessar sua conta informe o email e senha.
            </p>
            <p 
                class="px-2"
                @click="userAuthLogin"
                style="cursor: pointer;"
            >
                (Usuário Autenticado)
            </p>
        </v-card-title>
        <v-form fast-fail ref="form" @submit.prevent>
            <v-col class="px-2 mb-2">
                <v-text-field
                    v-model="user.username"
                    variant="outlined"  
                    placeholder="andre_celtics"
                    persistent-placeholder
                    density="compact"
                    label="Username"
                    :rules="emailValid"
                />
            </v-col>
            <v-col class="px-2 ">
                <v-text-field
                    v-model="user.password"
                    :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append-inner="show1 = !show1"
                    variant="outlined"
                    density="compact"
                    placeholder="Sua senha"
                    persistent-placeholder
                    label="Senha"
                    :rules="passValid"
                />
            <v-col class="pa-0 text-end">
                <span class="recover-pass pa-1">Esqueceu a senha?</span>
            </v-col>
            </v-col>
            <v-col cols="12" class="pa-2 mt-2">
                <v-btn 
                    @click="singIn"
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
import User from "@/entity/User";
import router from "@/router";
import { useUserStore } from "@/stores/UserStore";
import { computed, reactive, ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import useValidation from '@/composables/useValidation'
import Swal from 'sweetalert2'
 
const { 
    required, 
    passMin, 
} = useValidation()

const form = ref()
const show1 = ref()
const {smAndUp} = useDisplay()
const authStore = useUserStore()
const user = reactive({
    username: '',
    password: ''
})

const emailValid = computed(() => [required ])
const passValid = computed(() => [required, passMin])
async function singIn() {
    const {valid} = await form.value.validate()
    if(valid) {
        const userObj = new User(user.username, user.password)
        const userValidate = await authStore.singIn(userObj)
        if(userValidate) {
            router.push('/home')
        }
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Ooops...',
            text: 'Por favor complete as informações!',
        })
    }
}

function userAuthLogin() {
    user.username = 'mor_2314'
    user .password = '83r5^_'
}
</script>

<style scoped>
.nextPage {
    color: #F11A40;
    cursor: pointer;
}

p{
    font-size: 14px;
}

.font-hover {
    font-size: 14px;
    text-decoration: underline;
}

.recover-pass {
    cursor: pointer;
    font-size: 12px;
    font-style: italic;
}
</style>