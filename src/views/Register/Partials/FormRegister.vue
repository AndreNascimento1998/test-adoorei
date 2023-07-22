<template>
     <v-card>
        <v-col>
            <h1>Dados Pessoais</h1>
            <span>informe seus dados pessoais para acesso à sua conta</span>
        </v-col>
        <v-form>
            <v-text-field 
                v-model="register.name"
                class="pa-3"
                label="Nome Completo"
                variant="outlined"
                density="compact"
            />
            
            <v-text-field 
                v-model="register.phone"
                class="pa-3"
                label="Celular"
                variant="outlined"
                density="compact"
            />

            <v-text-field 
                v-model="register.email"
                class="pa-3"
                label="E-mail"
                variant="outlined"
                density="compact"
            />

            <v-text-field 
                v-model="register.password"
                class="pa-3"
                label="Senha"
                variant="outlined"
                density="compact"
                :rules="validPass"
                hint="No mínimo 8 caracteres"
                persistent-hint
            />

            <v-text-field 
                v-model="register.validPassword"
                class="pa-3"
                label="Confirme sua senha"
                variant="outlined"
                density="compact"
                :rules="validOutherPass"

            />

            <v-divider class="mt-2 mb-2"/>

            <v-col>
                <h1>Dados do seu site</h1>
            </v-col>

            <v-text-field 
                v-model="register.siteName"
                class="pa-3"
                label="Nome do seu site"
                variant="outlined"
                density="compact"
                hint="Exatamente igual ao título do site"
                persistent-hint
            />

            <v-col>
                <v-btn 
                    @click="saveUser"
                    block 
                    variant="outlined"
                >
                    Cria Conta
                </v-btn>
            </v-col>
        </v-form>
    </v-card>
</template>

<script setup lang="ts">
import useValidation from "@/composables/useValidation";
import User from "@/entity/User";
import router from "@/router";
import { useUserStore } from "@/stores/UserStore";
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const userStore = useUserStore()
const route = useRoute()

const { 
    required, 
    passMin, 
    minLenght, 
    phoneMin, 
    arrobaRequired
} = useValidation()

const validPass = computed(() => [ passMin, required ])
const validOutherPass = computed(() => [ passMin, required, samePass])

const register = reactive({
    idProduct: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    validPassword: '',
    siteName: ''
})

const samePass = (value: string) => value == register.password || 'As senhas estão diferentes!'

async function saveUser() {

    const result = await userStore.saveUser(register)
    console.log(`Usuário cadastrado: ${result}`)

    //Como fakeApi não retorna usuário válido simularemos 
    //o login com o usuário que a mesma permite validar
    const userObj = new User('mor_2314', '83r5^_')
    const userValidate = await userStore.singIn(userObj)
    if(userValidate) {
        router.push('/home')
    }
}

onMounted(() => {
    register.idProduct = route.params.id
})

</script>